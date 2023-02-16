let userName = "John";
 
 function displayUserName() {
   userName = "Emma";
   console.log(userName);
 }
 
 displayUserName();

 // 2 error 

 //emma


 const freeCodeCamp = {
    frontend: "React",
    backend: "Node",
    database: "MongoDB",
  };
  
//   const frontend = freeCodeCamp.frontend;
//   const backend = freeCodeCamp.backend;

  const {frontend, backend} = freeCodeCamp  // const frontend = freeecodeCamp.frontend , const backend = freecodeCamp.backend 

  console.log(frontend, backend);
  
  const [firstItem , secondItem] = [1,2]

  console.log(firstItem, secondItem)