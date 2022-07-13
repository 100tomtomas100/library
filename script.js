let MyLibrary = [];
let BookTitle = document.getElementById("book-title");
let BookAuthor = document.getElementById("book-author");
let BookPages = document.getElementById("book-pages");
let ReadCheck = document.getElementById("read-check");
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}
let BookTable = document.getElementById("books-table");
let NewRow =  document.createElement("tr");
let NewCell1 = document.createElement("td");
let NewCell2 = document.createElement("td");
let NewCell3 = document.createElement("td");
let NewCell4 = document.createElement("td");
let NewCell5 = document.createElement("input");

document.getElementById("add-book").addEventListener("click", () => { 
    if (BookTitle.value != "" && BookAuthor.value != "" && BookPages.value != "") {
let  NewBook = new Book(BookTitle.value, BookAuthor.value, BookPages.value, ReadCheck.value);
MyLibrary.push(NewBook);

NewRow =  document.createElement("tr");
NewCell1 = document.createElement("td");
NewCell2 = document.createElement("td");
NewCell3 = document.createElement("td");
NewCell4 = document.createElement("td");
NewCell5 = document.createElement("input");
BookTable.appendChild(NewRow);

NewCell1.innerText = BookTitle.value;
NewRow.appendChild(NewCell1);

NewCell2.innerText = BookAuthor.value;
NewRow.appendChild(NewCell2);

NewCell3.innerText = BookPages.value;
NewRow.appendChild(NewCell3);

if (ReadCheck.checked == true || NewCell5.checked == true){
    NewCell4.innerText = "Read";
} else {
    NewCell4.innerText = "Not read"
}
NewRow.appendChild(NewCell4);

NewCell5.type = "checkbox";

NewRow.appendChild(NewCell5)
BookTitle.value = "";
BookAuthor.value = "";
BookPages.value = "";
ReadCheck.checked = false;

}else {
let warning = document.createElement("p");
warning.innerText = "Please fill in all the fields!";
warning.style.color  = "red";
let inputs = document.getElementById("inputs").appendChild(warning);
}
})



// console.log(theHobbit)

/*Book.prototype.info = function () {
        if(this.read === true) {
             return(this.title, "by", this.author, this.pages, "pages", "read")
            } else {
                return (this.title + " by" + " " + this.author + ", " + this.pages + " pages," + " not read yet");                
            }
                }   
   */