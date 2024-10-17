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