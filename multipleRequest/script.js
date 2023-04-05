async function fetchData(){
    const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1")
    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1")

    const [todoResponse, postResponse] = await Promise.all([todoPromise, postPromise])

    const todoData = await todoResponse.json()
    const postData = await postResponse.json()

    const result = {
        todo: todoData,
        post: postData
    }
    console.log(result);
}
fetchData().then(function (data){
    console.log(data)
})
