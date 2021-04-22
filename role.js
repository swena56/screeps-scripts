const roleHarvester = require('./role-harvester');
const roleBuilder = require('./role-builder');
const roleUpgrader = require('./role-upgrader');

module.exports = function(creep) {
    // console.log(`[${creep.memory.role}] ${creep.name} `);
    // {"room":{"name":"sim","energyAvailable":150,"energyCapacityAvailable":300,"survivalInfo":{},"visual":{"roomName":"sim"}},"pos":{"x":24,"y":18,"roomName":"sim"},"id":"5dbb878cf9621d83d0c9dffe","name":"simMix1","body":[{"type":"carry","hits":100},{"type":"work","hits":100},{"type":"move","hits":100},{"type":"move","hits":100}],"my":true,"owner":{"username":"swena56"},"spawning":false,"carryCapacity":50,"carry":{"energy":2},"store":{"energy":2},"fatigue":0,"hits":400,"hitsMax":400}
    // JSON.stringify(Game.creeps["simMix1"].body)
    switch (creep.memory.role) {
        case 'harvester':  roleHarvester(creep); break;
        case 'upgrader':  roleUpgrader(creep); break;
        case 'builder':  roleBuilder(creep); break;
        default: roleHarvester(creep); break;
      }
};