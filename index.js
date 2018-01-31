const maps = require('./util/maps');

function Mapper(event) {
    this.mapName = "us";
    this.event = event;
}

Mapper.prototype = {
    useMap : function(name) {
        this.mapName = name.toLowerCase();
        return this;
    },
    map : function (value) {
        if (typeof value === 'number') {
            if (value === undefined
                || maps[this.mapName] === undefined
                || maps[this.mapName][value] === undefined) {
                return "";
            }
            return maps[this.mapName][value];
        }
        else {
            var ev;
            if (value)
                ev = value;
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
    }
};

module.exports = Mapper;