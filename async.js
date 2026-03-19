// let promise =new promise( ( resolve,reject)=>{
//     let sucess = true;
//     if (sucess)
//         resolved("data loaded");
//     else
//         reject("error occured");


// });
// promise.then(result=>console.log(result))
// .catch(error=>console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));
try{
    var x=y+10;

}
catch(error){
    console.log(error.message);
}
// local storage
localStorage.setItem("user", JSON.stringify(user));
// retrieve object





