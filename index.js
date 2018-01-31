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
    map : function (event) {
        var ev;
        if (event)
            ev = event;
        else
            ev = this.event;
        if (ev === undefined
            || ev.which === undefined
            || maps[this.mapName] === undefined
            || maps[this.mapName][ev.which] === undefined) {
            return "";
        }
        return maps[this.mapName][ev.which];
    }
};

module.exports = Mapper;