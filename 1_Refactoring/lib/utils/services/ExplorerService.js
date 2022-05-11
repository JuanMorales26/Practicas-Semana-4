class ExplorerService{
    static filterByMission(explorers, mission){
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = ExplorerService