let myLibrary = [];

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus = readStatus == true ? "read" : "not read yet";
	this.info = () => console.log(title, author, pages + " pages", readStatus);
}

const addBookToLibrary = () => {
	const title = prompt("What is the title of the book?");
	const author = prompt("Who is the author?");
	const pages = prompt("How many pages");
	const readStatus = prompt("Have you finished reading the book?");
	const book = new Book(title, author, pages, readStatus);
	myLibrary.push(book);
};

addBookToLibrary();
