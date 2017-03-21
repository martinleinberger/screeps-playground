require('prototype.spawn')

module.exports.loop = function () {    
    for (var spawnName in Game.spawns) 
        Game.spawns[spawnName].update();
}