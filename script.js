//Library

let myLibrary = JSON.parse(localStorage.getItem("Library") || "[]");
console.log("# of Books: " + myLibrary.length);
console.log(myLibrary)

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
//initial state of the library
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


//Adding images to localstorage takes up too much space
/* let getImg = document.querySelector("#img");

getImg.addEventListener("change", function () {
 const reader = new FileReader();
 reader.addEventListener("load", ()=>{
 localStorage.push("BookImage", reader.result);
 
 });
 reader.readAsDataURL(this.files[0]); 
});
 */



//Add Book To Library // From Save Modal
function addBookToLibrary() {/* 
    let img = document.getElementById('img') */
    let pic = document.getElementById("Pic").value;
    let bookname = document.getElementById("BookName").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;

     if(pic == "" /* && img == undefined */ ){
     pic = "/assets/Default-Book-Img.png" 
    } 
    
 /*    if(img != undefined){
     pic = uploadedImg
    }  */

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
    ListActions.innerHTML =  '<button onclick="editBook(this)">' + '<iconify-icon icon="fa:pencil"    style="font-size: large; color: #0d4a81" />' + ' </button>' + '<button onclick="deleteBook(this)">' + '<iconify-icon icon="fa-solid:trash-alt"    style="font-size: large; color: #0d4a81" />' + ' </buuton'
    BookItem.appendChild(ListActions)
    

 }






 function editBook(e) {

  let Lib =  JSON.parse(localStorage.getItem("Library"));
  let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)
  
  let BookIndex = (BooksDisplayed.indexOf(e.parentNode.parentNode))
  
  console.log(Lib[BookIndex].title)
  OpenModal()
  document.querySelector("#BookName").value = Lib[BookIndex].title
  document.querySelector("#Author").value = Lib[BookIndex].author
  document.querySelector("#Pages").value = Lib[BookIndex].pages
  document.querySelector("#Read").value = Lib[BookIndex].read
  if (Lib[BookIndex].pic == "/assets/Default-Book-Img.png") {
    document.querySelector("#Pic").value = ""
  }else{
  document.querySelector("#Pic").value = Lib[BookIndex].pic}
  document.getElementById("submit").setAttribute("onclick", "editBookModal("+ BookIndex +")")



 }

 function editBookModal(index){
  let img = document.getElementById('img').value
    let pic = document.getElementById("Pic").value;
    let bookname = document.getElementById("BookName").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;
   
    if(pic == ""){
      pic = "/assets/Default-Book-Img.png"
    }

    let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)

    BooksDisplayed[index].querySelector("#BookName-List").innerHTML = bookname
    BooksDisplayed[index].querySelector("#Author-List").innerHTML = author
    BooksDisplayed[index].querySelector("#Pages-List").innerHTML = pages
    let Checkbox = BooksDisplayed[index].querySelector("#check")
    if (read == "Yes") {
     Checkbox.checked = true;
    }else{
      Checkbox.checked = false
    }

    let myLibraryEdit = JSON.parse(localStorage.getItem("Library"))
    myLibraryEdit[index].title = bookname
    myLibraryEdit[index].author = author
    myLibraryEdit[index].pages = pages
    myLibraryEdit[index].read = read
    localStorage.setItem("Library", JSON.stringify(myLibraryEdit))

    closeModal()
 }



function findInArray() {
  
}

function deleteBook(e) {
  
  
  let Lib =  JSON.parse(localStorage.getItem("Library"));
  let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)
  
  let index = (BooksDisplayed.indexOf(e.parentNode.parentNode))
  
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  
  
  if (index > -1) {
    Lib.splice(index, 1);
  }
  localStorage.setItem("Library", JSON.stringify(Lib));
  
  
  if (BooksDisplayed.length == 1) {
  
    document.querySelector('.empty-state').style.display = "flex"
    document.querySelector('.full-state').style.display = "none"
  
  }


}


