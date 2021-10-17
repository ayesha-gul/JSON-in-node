// there is two ways used to convert JSON into <object 
// and Object into JSON
// e.g;

//  creating an Object
 const  data = {
     name: "Ayesha",
     age:21,
     gender: "female",
     height: 5.2,
     weight: "52kg",

 }

let jsonData = JSON.stringify(data);
console.log(jsonData);

// now converting json again to Object

let orgdta = JSON.parse(jsonData);
console.log(orgdta);