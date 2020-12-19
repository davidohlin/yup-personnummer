# yup-personnummer [![Build Status](https://github.com/davidohlin/yup-personnummer/workflows/build/badge.svg)](https://github.com/davidohlin/yup-personnummer/actions)

Adds validation for Swedish personal identity numbers to [Yup](https://github.com/jquense/yup).

## Installation

```sh
$ npm install yup-personnummer
```

## Usage

```js
import * as Yup from 'yup'
import 'yup-personnummer'

const schema = Yup.string().personnummer().required()

console.log(schema.isValidSync('190905271474')) // true
```
