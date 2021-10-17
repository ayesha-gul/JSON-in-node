let bioData = {
    name: "ayesha",
    age: 21,
    gender: "female",
    height: 5.2,
    weight: "52kg",
}
let fs = require('fs');
 // convert to json

 let jsonData = JSON.stringify(bioData);
 console.log("json format:" + " " + jsonData);

 let orData = JSON.parse(jsonData);
 console.log('obj form:', orData);

 // ada this data into new file

 fs.writeFile("newJsonFile", jsonData, (err)=> {
     console.log('file created');
 })

// read the created file

fs.readFile("newJsonFile", "utf-8", (err,data) => {
        console.log("Read your data"+ " " + data )

   let objForm = JSON.parse(jsonData);
   console.log("objectForm:", objForm);
})

// again convert back the json format into obj 

// let ObjData = JSON.parse(jsonData);
// console.log(" Object Format:" + " " + ObjData);