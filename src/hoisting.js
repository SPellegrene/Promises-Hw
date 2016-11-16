// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined) //because myvar was not given any values, it is inherently undefined
    var myvar = 'local value';
})()


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)// because var flag was given a definition of true.
}
test()

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === undefined)
    var message = 'Foo bar'
}
saySomething()

// // 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Hello world')//because Hello world is defined first
    message = 'Foo bar'
}
saySomething()

// // 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a === undefined)
    console.assert(foo() === 2)//foo i a function given a return of 2 and a is only a variable, which is given after the console.assert

    var a = 1
    function foo() {
        return 2
    }
}
test();

// // 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)')// bar is not defined when it is given the console assert. foo concats bar which is undefined, therefore undefined becomes a string along with foo. 
    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()
