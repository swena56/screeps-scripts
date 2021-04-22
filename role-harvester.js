const stats = require('./creep-about');

const assignSource = (creep) => {
    if( !creep.memory.dest || creep.memory.dest === 'spawn' ){
        const sources = creep.room.find(FIND_SOURCES);
        const randomSource = sources[_.random(0,sources.length)];
        if( randomSource && randomSource.id ){
            creep.memory.dest = sources[_.random(0,sources.length)].id;
            assignSource(creep);
            log(stats(creep));
        }
    }
};

module.exports = function(creep) {
    assignSource(creep);
    const spawn = Game.spawns[Object.keys(Game.spawns)];

    if(creep.memory.isEmpty) {
        var sources = creep.room.find(FIND_SOURCES);
        const source =  creep.memory.dest ? Game.getObjectById(creep.memory.dest) : sources[0];
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }

        if( stats(creep).isFull ){
            creep.memory.isFull = true;
            creep.memory.isEmpty = false;
            creep.say('🚧 deliver');
        }
    } else {

        if( spawn.store.energy !== 300 ){
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        } else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }

        if( stats(creep).isEmpty ){
            creep.memory.isEmpty = true;
            creep.memory.isFull = false;
            creep.say('🔄 harvest');
        }
    }
};