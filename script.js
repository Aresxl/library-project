const bookTitleInput = document.getElementById("bookTitle");
const authorNameInput = document.getElementById("authorName");
const bookPagesInput = document.getElementById("bookPages");
const readYesInput = document.getElementById("readYes");
const readNoInput = document.getElementById("readNo");

const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");


cancelBtn.addEventListener('click', clearForm);
submitBtn.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();

    const bookTitle = bookTitleInput.value;
    const authorName = authorNameInput.value;
    const bookPages = bookPagesInput.value;
    const readStatus = readYesInput.checked ? 'Yes' : 'No'

    console.log("Title: ", bookTitle);
    console.log("Author: ", authorName);
    console.log("Pages: ", bookPages);
    console.log("Read Status: ", readStatus);

    clearForm();
}

function clearForm() {

    bookTitleInput.value = '';
    authorNameInput.value = ''
    bookPagesInput.value = ''
    readYesInput.checked = false;
    readNoInput.checked = false;
}




const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


let Magician = new Book('Magician', 'Raymond E Feist', 1000, true);
let HungerGames = new Book('Hunger Games', 'Suzanne Collins', 374, false);
let FreeYourMind = new Book('FreeYourMind', 'Kenny McLoving', '278', false);


function addBookToLibrary() {

};