//DOM Elements

let pic = document.getElementById("Pic");
let bookname = document.getElementById("BookName");
let author = document.getElementById("Author");
let pages = document.getElementById("Pages");
let read = document.getElementById("Read");
let submitbutton = document.getElementById("submit")
let checkbox = document.getElementById("check")

bookname.addEventListener('input', CheckInput);
author.addEventListener('input', CheckInput); 

/* 
checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("Checkbox is checked..");
  }
}) */



 function CheckInput() {
      if (bookname.value == "" || author.value == "") {
        submitbutton.style.backgroundColor = "#EEEEEE"
        submitbutton.style.color = "#8D8D8D"
        submitbutton.style.cursor = "not-allowed"
        submitbutton.removeEventListener("click", addBookToLibrary)
       } else{
        submitbutton.style.backgroundColor = "#1D476D"
        submitbutton.style.color = "#FFFFFF"
        submitbutton.style.cursor = "pointer"
        submitbutton.addEventListener("click", addBookToLibrary)
      }
    };




  function readChecked(e){
    let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)
    let BookIndex = (BooksDisplayed.indexOf(e.target.parentNode.parentNode.parentNode)) 
    let myLibraryEdit = JSON.parse(localStorage.getItem("Library"))
    {
      if (e.target.checked){
        myLibraryEdit[BookIndex].read = "Yes"
        localStorage.setItem("Library", JSON.stringify(myLibraryEdit))
      }else{
        myLibraryEdit[BookIndex].read = "No"
        localStorage.setItem("Library", JSON.stringify(myLibraryEdit))
      }}
  }

 


//Library

let myLibrary = JSON.parse(localStorage.getItem("Library") || "[]");
console.log("# of Books: " + myLibrary.length);
console.log(myLibrary)

let i = 0;
//Onload Add Books from Localstorage
while (i < myLibrary.length) {
    console.table(myLibrary[i]);
    if (myLibrary[i].pic == "" ) {
      myLibrary[i].pic = "/assets/defaultimage.png"
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


//Add Book To Library // From Save Modal
function addBookToLibrary() {
  
  let picvalue = pic.value
  let bookvalue = bookname.value
  let authorvalue = author.value
  let pagesvalue = pages.value
  let readvalue = read.value

  /* let img = document.getElementById('img') */
    
      console.log(bookvalue)
     if(picvalue == "" /* && img == undefined */ ){
      picvalue = "/assets/defaultimage.png" 
    } 
    
    myLibrary.push(new Book(picvalue, authorvalue, bookvalue, pagesvalue, readvalue))
    localStorage.setItem("Library", JSON.stringify(myLibrary));
    closeModal()
    checkIfEmpty()
    addBookToList(picvalue, authorvalue, bookvalue, pagesvalue, readvalue)
    }


function OpenModal(){
  CheckInput()
  document.querySelector('.addbook').style.visibility = "visible"
  document.getElementById("submitEdit").style.display = "none"
  document.getElementById("submit").style.display = "inline"

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
    Checkbox.addEventListener('change', e => readChecked(e))
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
  if (Lib[BookIndex].pic == "/assets/defaultimage.png") {
    document.querySelector("#Pic").value = ""
  }else{
  document.querySelector("#Pic").value = Lib[BookIndex].pic}
  document.getElementById("submit").style.display = "none"
  document.getElementById("submitEdit").style.display = "inline"
  document.getElementById("submitEdit").setAttribute("onclick", "editBookModal("+ BookIndex +")")
  }



 function editBookModal(index){
  let pic = document.getElementById("Pic").value;
  let bookname = document.getElementById("BookName").value;
  let author = document.getElementById("Author").value;
  let pages = document.getElementById("Pages").value;
  let read = document.getElementById("Read").value;
   
    if(pic == ""){
      pic = "/assets/defaultimage.png"
    }

    let BooksDisplayed = Array.from(document.getElementById("listofBooks").children)

    BooksDisplayed[index].querySelector("#BookName-List").innerHTML = bookname
    BooksDisplayed[index].querySelector("#Author-List").innerHTML = author
    BooksDisplayed[index].querySelector("#Pages-List").innerHTML = pages
    BooksDisplayed[index].querySelector("#BookImgpreview").style.backgroundImage = 'url('+ pic +')'


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
    myLibraryEdit[index].pic = pic
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