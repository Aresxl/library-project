const bookTitleInput = document.getElementById("bookTitleInput");
const authorNameInput = document.getElementById("authorNameInput");
const bookPagesInput = document.getElementById("bookPagesInput");
const readYesInput = document.getElementById("readYes");
const readNoInput = document.getElementById("readNo");


const formContainer = document.querySelector('.formContainer');
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const header = document.querySelector('header');
const bookContainer = document.querySelector('.bookContainer');

addBookBtn.addEventListener('click', formPopup);
cancelBtn.addEventListener('click', clearForm);
submitBtn.addEventListener('click', submitForm);

function formPopup (event) {
    formContainer.style.visibility = 'visible';
    header.classList.add('blurred');
    bookContainer.classList.add('blurred');
};

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

    const newBook = new Book(bookTitle, authorName, bookPages, readStatus);
    myLibrary.push(newBook);

    console.log(newBook);
    console.log(myLibrary);

    displayBook(myLibrary);
    clearForm();
    formContainer.style.visibility = 'hidden';
}

function clearForm() {

    bookTitleInput.value = '';
    authorNameInput.value = ''
    bookPagesInput.value = ''
    readYesInput.checked = false;
    readNoInput.checked = false;

    formContainer.style.visibility = 'hidden';
    header.classList.remove('blurred');
    bookContainer.classList.remove('blurred');

}

//


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
let Example = new Book('Example', 'Kenny McLoving', '278', false);
let Example2 = new Book('FreeYourMind', 'Kenny McLoving', '278', false);
let Example3 = new Book('FreeYourMind', 'Kenny McLoving', '278', false);


myLibrary.push(Magician);
myLibrary.push(HungerGames);
myLibrary.push(FreeYourMind);
myLibrary.push(Example);
myLibrary.push(Example2);





// Showing on Page Section

const gridContainer = document.querySelector('.gridContainer');

function displayBook(bookArray) {
    gridContainer.textContent = '';

    bookArray.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        const titleElement = document.createElement('h3');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;

        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.pages}`;

        const readElement = document.createElement('p');
        readElement.textContent = `Read ${book.read ? 'Yes' : 'No'}`;

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readElement);

        gridContainer.appendChild(bookCard);
    });
}

displayBook(myLibrary);



console.log(myLibrary);