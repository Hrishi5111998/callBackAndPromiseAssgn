fetch("https://jsonplaceholder.typicode.com/posts/123456789")
.then(function(response){
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
   return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.error(err.message);
    const errorDiv = document.createElement('div')
    errorDiv.textContent = `Error: ${err.message}`
    document.body.appendChild(errorDiv)
})