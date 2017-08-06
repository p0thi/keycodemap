const maps = require('./util/maps');

function Mapper(event) {
    this.mapName = "us";
    this.event = event;
}

Mapper.prototype = {
    useMap : function(name) {
        this.mapName = name;
        return this;
    },
    map : function () {
        var event = this.event;
        if (event.which === undefined
            || maps[this.mapName] === undefined
            || maps[this.mapName][event.which] === undefined) {
            return "";
        }
        return maps[this.mapName][event.which];
    }
};

module.exports = Mapper;