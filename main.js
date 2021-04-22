require('./globals');

const role = require('./role');

module.exports.loop = function () {

  for(const name in Game.creeps) {
    role(Game.creeps[name]);
  }

  if( Game.time % 100 === 0 ){
    spawn();
  }
};
