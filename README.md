# file-birth 👶🏻
> Get a file's created date. Easily, quickly and formatted! 

## Install

Install with yarn 
```
yarn add file-birth
```

Install with npm 
```
npm install file-birth --save
```

## Usage
```js
const birthDate = require('file-brith')

birthDate('myfile.txt')
//=> 2017-10-22T12:00:00.000Z

birthDate('myfile.txt', 'DD/MM/YYYY')
//=> 22/10/2017

birthDate('myfile.txt', 'yyyy')
//=> 2017

birthDate('myfile.txt', 'dd-mm-yy')
//=> 22-10-17

birthDate('', 'dd-mm-yy')
//=> Error: file not found.

```

## Changelog
- **22/10/17** version 1.0.0 released.

## License

[MIT License](https://github.com/mateuszjanusz/picsort/blob/master/LICENSE.md)

Copyright (c) 2017 Mateusz Janusz
