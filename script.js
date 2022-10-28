function Book(pic, author, title, pages, read) {
    this.pic = pic,
    this.author = author 
    this.title = title
    this.pages = pages 
    this.read = read

    this.returnBook = function(){
        console.log(author, title, pages, read)
    }
}

let myLibrary = JSON.parse(localStorage.getItem("Library") || "[]");
console.log("# of Books: " + myLibrary.length);

let i = 0;

while (i < myLibrary.length) {
    console.log(myLibrary[i]);
    i++;
}

function addBookToLibrary() {
    let bookname = document.getElementById("BookName").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;
    
    myLibrary.push(new Book(author, bookname, pages, read))
    localStorage.setItem("Library", JSON.stringify(myLibrary));

    }
    




