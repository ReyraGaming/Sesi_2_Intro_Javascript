function areParenthesesValid(inputString) {
    return inputString === '({[()]})'
}

//boolean_1
console.log(areParenthesesValid('({[()]})'))
//boolean _2
console.log(areParenthesesValid('({[]})'))