



let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author 
    this.title = title
    this.pages = pages 
    this.read = read

    this.returnBook = function(){
        console.log(author, title, pages, read)
    }
}


const Book1 = new Book('steve', 'X', 8, 'true')


function addBookToLibrary() {

   myLibrary.push(Book1)
   console.table(myLibrary)
    
}


addBookToLibrary() // lo