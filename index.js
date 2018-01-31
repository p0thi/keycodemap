const maps = require('./util/maps');

let mapName = "us";

module.exports = {
    seMap: function (name) {
        mapName = name.toLowerCase();
        return this;
    },
    map: function (value) {
        if (typeof value === 'number') {
            if (value === undefined
                || maps[mapName] === undefined
                || maps[mapName][value] === undefined) {
                return "";
            }
            return maps[mapName][value];
        }
        else {
            var ev;
            if (value)
                ev = value;
            else
                ev = this.event;
            if (ev === undefined
                || ev.which === undefined
                || maps[mapName] === undefined
                || maps[mapName][ev.which] === undefined) {
                return "";
            }
            return maps[mapName][ev.which];
        }
    }
}