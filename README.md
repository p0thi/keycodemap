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
You can pass in a javascript key event or the key code as a number to get the Name.
# Currently available maps
<details>
<summary>Click to expand</summary>
United States of America ("US")
Germany ("DE")
</details>

# Usage
Install the package using `npm` with `npm install --save keycodemap`.

Import it to your project
```javascript
const keycodemap = require('keycodemap');
```
The default location is 'US'. 
Now you can use `map()` to get the key names:
```javascript
// event is a javascript key event or a number
var name = keycodemap.map(event);

// e.g. if the key code was 59 it will print 'SEMICOLON'
console.log(name);
```
To change the locale, just call
```javascript
// newLocationString i a ISO 3166-1 string e.g. "DE"
keycodemap.useMap(newLocationString);
```