module.exports = function(creep) {
    return {
        name: creep.name,
        store: creep.store[RESOURCE_ENERGY],
        freeCap: creep.store.getFreeCapacity(),
        isEmpty:  creep.store[RESOURCE_ENERGY] === 0,
        isFull: creep.store[RESOURCE_ENERGY] === creep.store.getCapacity(),
    };
};