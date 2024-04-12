const apiURL = "http://localhost:8080/api"
const authorResource = "authors"

async function loadAuthor () {
    const author = await fetchAuthor(1);

    const userNameHTML = $("#userName")[0];
    userNameHTML.innerText = `${author.firstName} ${author.lastName}`;

    const listOfBooksDiv = $("#listOfBooks")[0];

    const listOfBooks = ["SO é chato", "PRojeto de Dev também é chato", "Como fazer Projeto de Dev não ser tão chato"]

    for (const book of listOfBooks) {
        const bookP = $("<p>")[0];
        bookP.innerText = book;
        listOfBooksDiv.append(bookP)
    }
}

async function fetchAuthor(id) {
    const api = `${apiURL}/${authorResource}/${id}`;
    const response = await fetch(api);
    const dataAuthor = await response.json();
    return dataAuthor;
}