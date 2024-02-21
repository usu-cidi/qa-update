
let BOARDS = [{
    name: 'Spring 2024',
    mondayId: '1',
    updateColId: '54321',
    allySemId: '123',
    endDate: '05/01/2024',
    lastUpdated: '01/28/2024',
    active: true,
}, {
    name: 'Fall 2023',
    mondayId: '2',
    updateColId: '54321',
    allySemId: '123',
    endDate: '05/01/2024',
    lastUpdated: '01/28/2024',
    active: false
}, {
    name: 'Summer 2024',
    mondayId: '3',
    updateColId: '54321',
    allySemId: '123',
    endDate: '05/01/2024',
    lastUpdated: '01/28/2024',
    active: true,
}];

let MAINTAINERS = [{
    email: "e.lynn@usu.edu",
    name: 'Emma Lynn',
    id: 1
}, {
    email: "e.lynn@usu.edu",
    name: 'Emma 2',
    id: 2
}, {
    email: "e.lynn@usu.edu",
    name: 'Emma 3',
    id: 3
}, {
    email: "a02391851@usu.edu",
    name: 'Emma Student',
    id: 4
}];

let PRIMARY_MAINTAINER = {id: 1};
let MAINTAINER_IDS = [1, 2, 3, 4];

// --- boards ---

exports.getBoards = async () => {
    return BOARDS;
}


exports.addNewBoard = async (board) => {
    BOARDS.push({
        name: board.name,
        mondayId: board.mondayID,
        updateColId: board.updateColID,
        allySemId: board.allyID,
        endDate: board.endDate,
        lastUpdated: 'Not Updated Yet',
        active: true
    });
    return 'success';
}

exports.updateBoard = async (board) => {

    const index = BOARDS.findIndex(theBoard => theBoard.mondayId === board.mondayID);

    if (index === -1) {
        return `Board with ID ${board.mondayID} not found.`;
    }

    const current = BOARDS[index];

    BOARDS[index] = {
        name: updateIfNeeded(current.name, board.name),
        mondayId: updateIfNeeded(current.mondayId, board.mondayID),
        updateColId: updateIfNeeded(current.updateColId, board.updateColID),
        allySemId: updateIfNeeded(current.allySemId, board.allyID),
        endDate: updateIfNeeded(current.endDate, board.endDate),
        lastUpdated: updateIfNeeded(current.lastUpdated, 'Not Updated Yet'),
        active: updateIfNeeded(current.active, true)
    }

    return 'success';
}

exports.deleteBoard = async (board) => {
    const index = BOARDS.findIndex(theBoard => theBoard.mondayId === board.mondayID);
    if (index === -1) {
        return `Board with ID ${board.mondayID} not found.`;
    }
    BOARDS.splice(index, 1);
    return 'success';
}

exports.changeBoardStatus = async (board, newStatus) => {
    const index = BOARDS.findIndex(theBoard => theBoard.mondayId === board.id);
    if (index === -1) {
        return `Board with ID ${board.mondayID} not found.`;
    }

    BOARDS[index].active = newStatus;
    return 'success';
}

function updateIfNeeded(original, updated) {
    if (updated) {
        return updated;
    } else {
        return original;
    }
}

exports.updateLastRun = async (boardID) => {
    return true;
}

// --- maintainers ---

function getMaintainerById(id) {
    try {
        return MAINTAINERS.filter((person) => person.id === id)[0];
    } catch {
        return undefined;
    }
}

function getNewMaintainerId() {
    const newID = MAINTAINER_IDS[MAINTAINER_IDS.length - 1] + 1;
    MAINTAINER_IDS.push(newID);
    return newID;
}

exports.getMaintainerEmails = async () => {
    const emails = [];
    for (let i = 0; i < MAINTAINERS.length; i++) {
        emails.push(MAINTAINERS[i].email);
    }
    return emails;
}

exports.getMaintainers = async () => {
    return MAINTAINERS;
}

exports.getHeadMaintainer = async () => {
    return getMaintainerById(PRIMARY_MAINTAINER.id).email;
}

exports.addNewMaintainer = async (maintainer) => {
    const id = getNewMaintainerId();

    MAINTAINERS.push({
        email: maintainer.email,
        name: maintainer.name,
        id: id,
    });

    if (maintainer.primary) {
        console.log(`New primary maintainer: ${maintainer.name}`);
        PRIMARY_MAINTAINER = {id: id};
    }

    return 'success';
}

exports.deleteMaintainer = async (maintainer) => {

    if (MAINTAINERS.length <= 1) {
        return 'There must be at least one maintainer. Add a new one before removing this one.'
    }

    if (maintainer.id === PRIMARY_MAINTAINER.id) {
        return 'You must set a new primary maintainer before removing this one.';
    }

    const index = MAINTAINERS.findIndex(thePerson => thePerson.id === maintainer.id);
    if (index === -1) {
        return `Maintainer with ID ${maintainer.id} not found.`;
    }
    MAINTAINERS.splice(index, 1);
    return 'success';
}

exports.getPrimaryMaintainer = async () => {
    return PRIMARY_MAINTAINER.id;
}


// --- issues ---

exports.updateLastIssues = async (issues) => {
    return true;
}




