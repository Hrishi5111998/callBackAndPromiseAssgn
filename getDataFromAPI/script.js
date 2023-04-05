// async function fetchData(){
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const posts = await promise.json()
// console.log(posts);
// }
// fetchData()

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(reponse){
  return reponse.json()
})
.then(function(data){
    console.log(data);
})
.catch (function(err){
    console.error(err)
})