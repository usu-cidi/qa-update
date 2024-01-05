
function mergeData(ally, dataLake) {

    return dataLake.map( (element, index) => { //for each course in the data lake
        let matchIndex = ally.findIndex((course) => course.name === element["Course"]); //find the match with the ally data
        let newElement = {...element, ...ally[matchIndex]} //combine the data
        ally.splice(matchIndex, 1); //remove record from ally - for search performance
        return newElement;
    });

}

module.exports = mergeData;
