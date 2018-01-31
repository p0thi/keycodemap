# keycodemap
> A small library to map keycodes to key names.
**Examples:**
```javascript
64 = 'A'
59 = 'SEMICOLON'
...
```
# Features
You can change the keyboard layout by country string defined after [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) .
Example for United States of America = "US".
You can pass in a javascript key event to get the Name.

# Currently available maps
```
United States of America ("US")
```

# Usage
Install the package using `npm` with `npm install --save keycodemap`.

Import it to your project
```javascript
const keycodemap = require('keycodemap');
const Map = new keycodemap();
```
The default location is 'US'.
Now you can use `Map` to get the key names:
```javascript
var name = Map.map(event); // event is a javascript key event
console.log(name); // e.g. if the key code was 64 it will print 'SEMICOLON'
```
To change the locale, just call
```javascript
Map.useMap(newLocationString); // newLocationString i a ISO 3166-1 string e.g. "US"
```
