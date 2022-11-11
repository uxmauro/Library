//Library

let myLibrary = JSON.parse(localStorage.getItem("Library") || "[]");
console.log("# of Books: " + myLibrary.length);

let i = 0;
//Onload Add Books from Localstorage
while (i < myLibrary.length) {
    console.table(myLibrary[i]);
    if (myLibrary[i].pic == "" ) {
      myLibrary[i].pic = "/assets/Default-Book-Img.png"
    }
    addBookToList(myLibrary[i].pic, myLibrary[i].author, myLibrary[i].title, myLibrary[i].pages, myLibrary[i].read)
    i++;
}

checkIfEmpty()

function checkIfEmpty() {

if (myLibrary.length < 1) {
  
  document.querySelector('.empty-state').style.display = "flex"
  document.querySelector('.full-state').style.display = "none"

} else {
  document.querySelector('.empty-state').style.display = "none"
  document.querySelector('.full-state').style.display =  "flex"

}

}

//Book Constructor
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





//Add Book To Library // From Save Modal
function addBookToLibrary() {
    let img = document.getElementById('img').value
    let pic = document.getElementById("Pic").value;
    let bookname = document.getElementById("BookName").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;

    
    if(pic == ""){
      pic = "/assets/Default-Book-Img.png"
    }
    
    myLibrary.push(new Book(pic, author, bookname, pages, read))
    localStorage.setItem("Library", JSON.stringify(myLibrary));
    closeModal()
    checkIfEmpty()
    addBookToList(pic, author, bookname, pages, read)
    }
    


function OpenModal(){
    document.querySelector('.addbook').style.visibility = "visible"
}

function closeModal(){
     document.querySelector('.addbook').style.visibility = "hidden"
     document.querySelector('#BookForm').reset();
     console.log(img)
   }



 //Add Styling to list
 function addBookToList(pic, author, bookname, pages, read) {
    const BookItem = document.createElement("div");
    BookItem.classList.add('BookItem');
    document.getElementById("listofBooks").appendChild(BookItem);
    
    const BookDetails = document.createElement("div");
    BookDetails.classList.add('BookDetails');
    BookItem.appendChild(BookDetails);

    const BookImgName = document.createElement("div");
    BookImgName.classList.add('BookImgName');
    BookDetails.appendChild(BookImgName);

    const BookImgpreview = document.createElement("div");
    BookImgpreview.setAttribute('id','BookImgpreview');
    BookImgpreview.style.backgroundImage = 'url('+ pic +')'
    BookImgName.appendChild(BookImgpreview);

    const BookName =  document.createElement("p")
    BookName.setAttribute("id", "BookName-List")
    let textToAdd = document.createTextNode(bookname)
    BookName.appendChild(textToAdd)
    BookImgName.appendChild(BookName)

    const Author = document.createElement("p")
    Author.setAttribute("id", "Author-List")
    let textToAddAuth = document.createTextNode(author)
    Author.appendChild(textToAddAuth)
    BookDetails.appendChild(Author)

    const Pages = document.createElement("p")
    Pages.setAttribute("id", "Pages-List")
    let textToAddPages = document.createTextNode(pages)
    Pages.appendChild(textToAddPages)
    BookDetails.appendChild(Pages)


    const CheckLabel = document.createElement("label")
    const Checkbox = document.createElement("input")
    Checkbox.setAttribute("id", "check")
    if (read == "Yes") {
      Checkbox.checked = true;
    }
    Checkbox.type = "checkbox"
    CheckLabel.appendChild(Checkbox)
    BookDetails.appendChild(CheckLabel)

    const ListActions = document.createElement("div")
    ListActions.classList.add("List-Actions")
    ListActions.innerHTML =  '<button onclick="editBook()">' + '<iconify-icon icon="fa:pencil"    style="font-size: large; color: #0d4a81" />' + ' </button>' + '<button onclick="deleteBook(this)">' + '<iconify-icon icon="fa-solid:trash-alt"    style="font-size: large; color: #0d4a81" />' + ' </buuton'
    BookItem.appendChild(ListActions)
    
    return BookItem;
 }

 function editBook() {
  
 }
  

function findInArray() {
  
}

function deleteBook(e) {
  
  
  
  let Lib =  JSON.parse(localStorage.getItem("Library"));
  let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)
  console.log(BooksDisplayed)
  
  let index = (BooksDisplayed.indexOf(e.parentNode.parentNode))
  
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  
  console.log(Lib)
  
  if (index > -1) {
    Lib.splice(index, 1);
  }
  localStorage.setItem("Library", JSON.stringify(Lib));
  
  
  if (BooksDisplayed.length == 1) {
  
    document.querySelector('.empty-state').style.display = "flex"
    document.querySelector('.full-state').style.display = "none"
  
  }


}



 /* let BooksDisplayed = document.getElementById("listofBooks").childElementCount

 console.log(BooksDisplayed) */
/* 
  console.log(e.parentNode.parentNode) */

/*   let libo = localStorage.getItem("Library") ? JSON.parse(localStorage.getItem('Library')) : []
  let libos = libo.splice(index, 1)
  let lib = localStorage.setItem('Library', JSON.stringify(libos)); */
  


/* 
const deleteLocal = () => {
  let Library = JSON.parse(localStorage.getItem("Library"));
  let indexLocalTask = getItemIndex(Library, BookItem);
  Library.splice(indexLocalTask, 1);
  localStorage.setItem("Library", JSON.stringify(Library));
}; */



   function uploadImage() {
    console.log('uploadImage')
}



/* 
let getImg = document.querySelector("#img");

    getImg.addEventListener("change", function () {
     const reader = new FileReader();
     reader.addEventListener("load", ()=>{
     localStorage.setItem("BookImage", reader.result);
     });
     reader.readAsDataURL(this.files[0]); 
    });
 
    document.addEventListener("DOMContentLoaded", () => {
     const recentImageDataUrl = localStorage.getItem("BookImage");
  
     if (recentImageDataUrl) {
          document.querySelector("#BookImgpreview").setAttribute("style", "background-image: url(" +  recentImageDataUrl +")");
  }
  }); */




