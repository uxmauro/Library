//Book Constructor
function Book(pic, author, title, pages, read) {
    this.pic = pic,
    this.author = author 
    this.title = title
    this.pages = pages 
    this.read = read

    if (pic == "") {
        this.pic = "https://unsplash.com/photos/658ElZwWXGY"
    }

    this.returnBook = function(){
        console.log(author, title, pages, read)
    }
}

//Library

let myLibrary = JSON.parse(localStorage.getItem("Library") || "[]");
console.log("# of Books: " + myLibrary.length);

let i = 0;

while (i < myLibrary.length) {
    console.log(myLibrary[i]);

    i++;
}


//Add Book To Library
function addBookToLibrary() {
    let pic = document.getElementById("Pic").value;
    let bookname = document.getElementById("BookName").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;
    
    myLibrary.push(new Book(pic, author, bookname, pages, read))
    localStorage.setItem("Library", JSON.stringify(myLibrary));
    closeModal()
    }
    


function OpenModal(){
    document.querySelector('.addbook').style.visibility = "visible"
}

function closeModal(){
     document.querySelector('.addbook').style.visibility = "hidden"
   }

