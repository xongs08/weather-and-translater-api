// import weather from "./src/services/weather";
// import { checkUndefined } from "./src/routes/router";
// import { port } from "./src/server";

// async function internMethod(prompt: string) {
//     const weatherData = await weather(prompt);
//     let status = 200;

//     const statusCode = checkUndefined(weatherData);

//     if (statusCode === 403) ( status = 403 );

//     return status;
// }


// function fetchMethod (prompt) {
//     return new Promise((resolve) => {
//         fetch(`http://localhost:${port}/api/weather/${prompt}`)
//             .then(resp => resp.json())
//             .then(data => {
//                 const weatherData = Object.entries(data);

//                 let status = 200;

//                 weatherData.forEach(([key, value]) => {
//                     if (value === undefined) {
//                         status = 403;
//                     }
//                 });

//                 resolve(status);
//             });
//     });
// }

// async function ecmaInternMethod (prompt) {
//     const { temperature, rain, humidity, wind, climate } = await weather(`${prompt}`);
//     let status;
    
//     if (temperature == undefined || rain == undefined || humidity == undefined || wind == undefined || climate == undefined) {
//         status = 403;
//     } else {
//         status = 200;
//     }

//     return status;
// }

// function ecmaFetchMethod(prompt) {
//     return new Promise((resolve) => {
//         fetch(`http://localhost:${port}/api/weather/${prompt}`)
//             .then(resp => resp.json())
//             .then(data => {
//                 const { temperature, rain, humidity, wind, climate } = data;

//                 let status;

//                 if (temperature == undefined || rain == undefined || humidity == undefined || wind == undefined || climate == undefined) {
//                     status = 403;
//                 } else {
//                     status = 200;
//                 }

//                 resolve(status);
//             });
//     });
// }

// async function testWeather(testPrompt) {
//     const status = Object.entries({
//         'Default Way': await internMethod(testPrompt),
//         'Default Fetch Way': await fetchMethod(testPrompt),
//         'ECMA Default Way': await ecmaInternMethod(testPrompt),
//         'ECMA Fetch Way': await ecmaFetchMethod(testPrompt)
//     });

//     status.forEach(([testName, statusCode]) => {
//         if (statusCode === 200) {
//             console.log(`${testName} Test Was Concluded Successfully! | 200`);
//         } else {
//             console.log(`${testName} Test Couldn't be concluded successfully. | 403`);
//         }
//     });
// }

// (async () => {
//     console.log('Expects: 200');
//     await testWeather('sorocaba');
//     console.log('-------');
//     console.log('Expects: 403');
//     await testWeather('im+not+a+real+region');
// })();

// (async () => {
//     const x = await internMethod('sorocaba');
//     console.log(x);
// })();
