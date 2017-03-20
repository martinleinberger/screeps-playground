var _ = require('lodash');
var UnitType = require('unitType');

module.exports = (function () {
    function create(spawn, body, name, type) {
        if (_.isString(spawn))
            spawn = Game.spawns[spawn];

        return spawn.createCreep(body, name, {type: type});
    }

    return {
        harvester: function(spawn) { 
            return create(spawn, [WORK, WORK, CARRY, MOVE], 'Harvester', UnitType.HARVESTER);
        },
        builder: function(spawn) {
            return create(spawn, [WORK,WORK,CARRY,MOVE], 'Builder', UnitType.BUILDER);
        }
    }
}());