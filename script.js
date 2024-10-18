const bookTitleInput = document.getElementById("bookTitleInput");
const authorNameInput = document.getElementById("authorNameInput");
const bookPagesInput = document.getElementById("bookPagesInput");
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

    const newBook = new Book(bookTitle, authorName, bookPages, readStatus);
    myLibrary.push(newBook);

    console.log(newBook);
    console.log(myLibrary);

    clearForm();
}

function clearForm() {

    bookTitleInput.value = '';
    authorNameInput.value = ''
    bookPagesInput.value = ''
    readYesInput.checked = false;
    readNoInput.checked = false;
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

myLibrary.push(Magician);
myLibrary.push(HungerGames)


// Showing on Page Section

const bookContainer = document.querySelector('.bookContainer');

function displayBook(bookArray) {
    bookContainer.textContent = '';

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

        bookContainer.appendChild(bookCard);
    });
}

displayBook(myLibrary);



console.log(myLibrary);