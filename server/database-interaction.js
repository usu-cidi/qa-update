
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
    console.log(BOARDS);
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

exports.getMaintainerEmails = async () => {
    return ["e.lynn@usu.edu", "a02391851@usu.edu"];
}

exports.getHeadMaintainer = async () => {
    return "e.lynn@usu.edu";
}


// --- issues ---

exports.updateLastIssues = async (issues) => {
    return true;
}




