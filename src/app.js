const fetch = require('node-fetch');
// // const Pocket = require('pocket-promise')
// // // const config = {
// // //     consumer_key: '91767-0344bbad681b8fa07d10c92f',
// // //     redirect_uri: 'http://localhost:49723/lists'
// // // };

// const config = {
//     consumer_key: '91767-0344bbad681b8fa07d10c92f',
//     access_token: "6e60ad8f-dd04-78b4-c7fb-284431",
// };

// const pocket = new Pocket(config)

// pocket.get({
//     detailType: "simple"
// }).then(data => Object.entries(data.list)).then(list => {
//     let x = list.map(g => g[1])
//     return x
// }).catch(err => console.error(err))

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://getpocket.com/v3/get', config)
//     .then(data => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });
     
// // const x = fetch("https://getpocket.com/v3/get", {
// //     method: "POST",
// //     headers: {
// //         'Content-Type': 'application/json; charset=UTF-8',
// //     'Accept': '*/*',
// //     'X-Accept': 'application/json'pw
// //       },
// //       body: JSON.stringify(config)
// // })
// // .then(data => console.log(data.json()))
// // .catch(err => console.log(err));

fetch("http://127.0.0.1:3000/")
.then(data => data.json())
.then(x => {
    // let d = x.map(y => y)
    console.log(x)
})
.catch(err => console.log(err))