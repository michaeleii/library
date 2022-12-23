const libraryGrid = document.getElementById("library-grid");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("read-status");

const myLibrary = [];

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus = readStatus == true ? "read" : "not read yet";
}
const displayLibrary = () => {
	const books = `${myLibrary
		.map(
			(b, i) =>
				`<div class="book">
             <button type="button" class="btn btn-danger  my-2" onclick="removeBookFromLibrary(${i})">X</button>
            <p>Title: ${b.title}</p>
            <p>Author: ${b.author}</p>
            <p>Pages: ${b.pages}</p>
            <p>Status: ${b.readStatus}</p>
        </div>`
		)
		.join("")}`;
	libraryGrid.innerHTML = books;
};

const addBookToLibrary = () => {
	const title = bookTitle.value;
	const author = bookAuthor.value;
	const pages = bookPages.value;
	const readStatus = bookStatus.checked;
	const book = new Book(title, author, pages, readStatus);
	myLibrary.push(book);
	displayLibrary();
};

const removeBookFromLibrary = (index) => {
	myLibrary.splice(index, 1);
	displayLibrary();
};
