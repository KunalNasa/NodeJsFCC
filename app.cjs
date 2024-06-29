// ------------------------------- SESSION - 4 -----------------------------
const _ = require('lodash');
const items = [1, [2, [3,[4,[5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// ------------------------------- SESSION - 3 -----------------------------
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/')
//     {
//         res.end("welcome to our home page");
//     }
//     if(req.url == '/about')
//     {
//         res.end("Welcome to about page");
//     }

//         res.end(`
//     <h1>OOPS!! page not found</h1>
//     <a href = "/"> back to home page </a>`);
    
//     // res.write("welcome to our home page");
//     // res.end();
// });



// server.listen(5000);


// ---------------------------- SESSION - 2 -------------------------------
// const {readFile, writeFile} = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if(err)
//         {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-Async.txt', `Result is : ${first} , ${second}`, (err, result) => {
//              if(err)
//              {
//                 console.log(err);
//              }
//              else{
//                 console.log(result);
//              }
//         });
//     })

// }) 



// -------------------------- SESSION - 1 -------------------------------
// // const names = require('./3-names.cjs') //or
// const {ajay, vijay} = require('./3-names.cjs');
// const sayHi = require('./4-utils.cjs')
// const data = require('./5-alternate-flavour.cjs')
// require('./6-mind-grenade.cjs')



// // console.log(names);
// sayHi("Rajesh");
// // sayHi(names.ajay);
// sayHi(ajay);

// console.log(data);