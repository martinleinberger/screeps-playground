var roleCache = {};

function getRoutine(role) {
    if (!(role in roleCache))
        roleCache[role] = require('role.' + role);
    
    return roleCache[role];

}

module.exports = function () {
    Creep.prototype.update = function() {
        getRoutine(this.memory.type).update(this);
    }
}
