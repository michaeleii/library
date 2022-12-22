function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus = readStatus == true ? "read" : "not read yet";
	this.info = () => console.log(title, author, pages + " pages", readStatus);
}
