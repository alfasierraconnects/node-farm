// // console.log("Hello World!");
// const { log } = require("console");
// const fs = require("fs");

// //Async way to read file
// //fs - file system/ file server -> used to manipulate the files in a system.
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `What we know about Avocado: ${textIn}.\nCreated on: ${Date.now()}`;
// // log(textOut);
// fs.writeFileSync("./txt/output.txt", textOut);
// log("File written");
// //new file created in system with the text provided.

// // -------------------------------------------------------------------------------------------------------------------------------//
// // Non-blocking Async way->

// const { log } = require("console");
// const fs = require("fs");

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) {
//     return log(`Error reading file: ${err}`);
//   }
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     if (err) {
//       return log(`Error reading file: ${err}`);
//     }
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       if (err) {
//         return log(`Error reading file: ${err}`);
//       }
//       const dataFinal = `${data2}\n${data3}`;
//       fs.writeFile(`./txt/final.txt`, dataFinal, (err, result) => {
//         if (err) {
//           return log(`Error reading file: ${err}`);
//         }
//         log("Data overwritten!");
//       });
//     });
//   });
// });

// -------------------------------------------------------------------------------------------------------------------------------//
//Creating a simple web server

const { log } = require("console");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  // log(pathname);
  // res.end(pathname);
  if (pathname === "/" || pathname === "/overview") {
    res.end("This is overview page.");
  } else if (pathname === "/product") {
    res.end("This is product page.");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h3>page not found!</h3>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  log("Listening to requests on port 8000");
});
