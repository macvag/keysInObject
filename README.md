

# Keys In Object

A Javascript library for retrieveing easy Object key's values.

## Installation
```
npm install keys-in-object
```

## How to use it 

Node.js
```
var keysInObject = require('keys-in-object');

var obj = {
	a: 'Test',
	b: true,
	c: 3,
    d: {
        c: 'here'
    }
};

var arrayOfKeyValues = keysInObject(obj, 'c');
console.log(arrayOfKeyValues)
// [3, 'here']
```

Browser

A build folder exists in keys-in-object under node_modules
Include the keysInObject.js file into your html script tags
```
<!doctype html>
<html>
    <head>  
    </head>
    <body>
        <script src="./path to file/keysInObject.js"></script>
        <script>
            var obj = {
                'a': true
            }
            var results = keysInObjects(obj,'a');
            console.log(results);
        </script>
    </body>
</html>
```

## Tests
Simply clone the repo, npm install, and run npm test