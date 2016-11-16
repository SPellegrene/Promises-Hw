// Explain what is going on here.

var p = new Promise(function(res, rej){ // creating a new promise with a response and reject in the callback
    setTimeout(() => res(1), 1000) // utilizing an AJAX setTimeout function. After 1 second give the first response starting at 1.
})

p.then(add1) // after the inital promise is complete, then apply the add1 function defined on bottom line.
    .then(add1) //after the first .then is complete, apply the add1 function to the new value.
    .then(add1) //after the first .then is complete, apply the add1 function to the new value.
    .then(add1) //after the first .then is complete, apply the add1 function to the new value.
    .then((v) => console.log(v)) //after the then is complete print the v value, which is 5.

function add1(v){ return v+1 }
