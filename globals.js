global.log = (obj) => {
    console.log(JSON.stringify(obj,null,'\t'));
    return obj;
}

global.randomObj = (obj) => {

};

global.memoryForCreep = (creep) => {
    if( typeof creep === 'string' ){
        creep = Game.creeps[creep];
    }
    if( creep && creep.memory ){
        log(creep.memory);
    }
}

global.randomCreep = () => {
    const allCreeps = Game.creeps;
    const creeps = Object.keys(allCreeps);
    const index = _.random(0, creeps.length);
    const name = creeps[index];
    return allCreeps[name];
};

global.randomCreepName = (prefix) => {
    while(true){
        const name = `${prefix||'Worker'}${_.uniqueId()}`;
        if( !Game.creeps[name] ){
            return name;
        }
    }
};

global.getCreepCountStats = () => {
    let counts = {
        harvester: 0,
        builder: 0,
        upgrader: 0,
    };
    for(const name in Game.creeps) {
        const role = Game.creeps[name].memory.role;
        counts[role] = counts[role] + 1;
    }
    return log(counts);
};

global.spawn = () => {
    const name = randomCreepName();
    let traits = [WORK, CARRY, CARRY, MOVE];
    let role = _.random() ? 'harvester' : 'builder';
    const firstSpawn = Game.spawns[Object.keys(Game.spawns)];
    firstSpawn.spawnCreep(traits, name, {
      memory: { 
        role: role, 
        dest: null,
      }
    });
};

