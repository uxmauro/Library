//Book Constructor
function Book(pic, author, title, pages, read) {
    this.pic = pic,
    this.author = author 
    this.title = title
    this.pages = pages 
    this.read = read

    if (pic == "" && img == "") {
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
    let img = document.getElementById('img').value
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
     console.log(img)
   }

   let thisshit = document.querySelector("#img");

   thisshit.addEventListener("change", function () {
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
 });

 function addBookToList() {
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
    BookImgName.appendChild(BookImgpreview);

    const BookName =  document.createElement("p")
    BookName.setAttribute("id", "BookName-List")
    let textToAdd = document.createTextNode("Text to be added")
    BookName.appendChild(textToAdd)
    BookImgName.appendChild(BookName)

    const Author = document.createElement("p")
    Author.setAttribute("id", "Author-List")
    let textToAddAuth = document.createTextNode("Text to be added")
    Author.appendChild(textToAddAuth)
    BookDetails.appendChild(Author)

    const Pages = document.createElement("p")
    Pages.setAttribute("id", "Pages-List")
    let textToAddPages = document.createTextNode("# of pages")
    Pages.appendChild(textToAddPages)
    BookDetails.appendChild(Pages)


    const CheckLabel = document.createElement("label")
    const Checkbox = document.createElement("input")
    Checkbox.setAttribute("id", "check")
    Checkbox.type = "checkbox"
    CheckLabel.appendChild(Checkbox)
    BookDetails.appendChild(CheckLabel)

    const ListActions = document.createElement("div")
    ListActions.classList.add("List-Actions")
    ListActions.innerHTML =  '<button>' + '<iconify-icon icon="fa:pencil"    style="font-size: large; color: #0d4a81" />' + ' </button>' + '<button>' + '<iconify-icon icon="fa-solid:trash-alt"    style="font-size: large; color: #0d4a81" />' + ' </buuton'
    BookItem.appendChild(ListActions)
    

 }
  

   function uploadImage() {
    console.log('uploadImage')
}

   /* 
<div class="BookItem">

<div class="BookDetails">

                <div class="BookImgName">

                <div id="BookImgpreview"></div>  <p id="BookName-List">jhdjhdjfkjdbkjbdjjdjknd</p>
            
                </div>

        <p id="Author-List">Aygygugxuth</p>
            <p id="Pages-List">3</p>
    <label f
    or="check">
      <input type="checkbox" id="check" />
    </label>
</div>
  <div class="List-Actions">
    <button>
      <iconify-icon
        icon="fa:pencil"
        style="font-size: large; color: #0d4a81"
      />
    </button>
    <button>
      <iconify-icon
        icon="fa-solid:trash-alt"
        style="font-size: large; color: #0d4a81"
      />
    </button>
  </div>
</div>
</div> */


/* 
function addBookToList() {
    const BookItem = document.createElement("div");
    BookItem.classList.add('BookItem');
    const textnode = document.createTextNode("Water");
    BookItem.appendChild(textnode);
    document.getElementById("listofBooks").appendChild(BookItem);
 } */