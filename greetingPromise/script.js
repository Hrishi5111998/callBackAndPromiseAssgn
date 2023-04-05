function greet(name){
    return new Promise(resolve => resolve(`hello, ${name}`))
}

greet('Joe').then((message) => {
 console.log(message);
})

