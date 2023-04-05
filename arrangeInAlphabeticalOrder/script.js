function arrangeBooks(books, callback){
let bookTitle = books.map(book => book.title)

bookTitle.sort()

callback(bookTitle)
}

function logs(bookTitle){
    for(let i = 0; i < bookTitle.length; i++){
        console.log(bookTitle[i]);
    }
}

let myBooks = [
    {title: 'Harry Potter', author: 'J.K. Rowling', year: 1998},
    {title: 'Lord of the Rings', author: 'J.R.R Tolkien', year: 2001},
    {title: 'And Then There Were None', author: 'Agatha Christie', year: 2003}
]

let arrange = arrangeBooks(myBooks, logs)