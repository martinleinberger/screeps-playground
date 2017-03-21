module.exports = function () {
    StructureSpawn.prototype.update = function() {
        if (this.spawning) {
            this.room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                this.pos.x + 1,
                this.pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
}
