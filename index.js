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
	this.readStatus = readStatus = readStatus == true ? "Read" : "Not read yet";
	this.changeStatus = () => {
		this.readStatus = this.readStatus == "Read" ? "Not read yet" : "Read";
	};
}
const displayLibrary = () => {
	const books = `${myLibrary
		.map(
			(b, i) =>
				`<div class="book">
                <div class="remove">
                <button type="button" class="btn btn-danger my-2" onclick="removeBookFromLibrary(${i})">X</button>
                </div>
            <p>Title: ${b.title}</p>
            <p>Author: ${b.author}</p>
            <p>Pages: ${b.pages}</p>
            <button type="button" class="btn ${
							b.readStatus == "Read" ? "btn-success" : "btn-secondary"
						}" id="read-status" onclick="changeReadStatus(${i})">${
					b.readStatus
				}</button>
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

const removeBookFromLibrary = (i) => {
	myLibrary.splice(i, 1);
	displayLibrary();
};

const changeReadStatus = (i) => {
	const book = myLibrary[i];
	book.changeStatus();
	displayLibrary();
};
