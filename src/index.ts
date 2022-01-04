/*
* This program ...
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-01-02
*/

'use strict'

const ps = require('prompt-sync')
const prompt = ps()

function asteristics (integer: number, spacesNum: number = 0) {
  // Generate asteristics.
  const AST: string = '*'
  let outPut: string = ''

  for (let counter: number = 0; counter < spacesNum; counter++) {
    outPut = ' ' + outPut
  }

  if (integer === 1) {
    console.log(outPut + AST)
    console.log(outPut + AST)
  } else {
    for (let counter1: number = 0; counter1 < integer; counter1++) {
      outPut = outPut + AST
    }

    console.log(outPut)

    asteristics(integer - 1, spacesNum + 1)

    console.log(outPut)
  }
}

const input: string = prompt('Insert an integer:')
const inputNum: number = parseInt(input)

if (isNaN(inputNum)) {
  console.log('This is not a number.')
} else {
  asteristics(inputNum)
}

console.log('Done.')
