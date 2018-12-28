

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

var users = {
	id_1: {
        name: 'John Doe',
        emain: 'johndoe@test.com'
    },
	id_2: {
        name: 'Hohn Moe',
        emain: 'hohnmoe@test.com'
    },
	id_3: {
        name: 'Joon Doo',
        emain: 'joondoo@test.com'
    },
    id_4: {
        name: 'Johnny Foe',
        emain: 'johnnyfoe@test.com'
    },
};

var arrayOfKeyValues = keysInObject(users, 'name');
console.log(arrayOfKeyValues)
// ['John Doe', 'Hohn Moe', 'Joon Doo', 'Johnny Foe']
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