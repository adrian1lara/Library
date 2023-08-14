const showForm = document.getElementById('showForm')
const formDiv = document.getElementById('form')
const booksDiv = document.getElementById('books')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary() {
    const title = titleInput.value
    const author = authorInput.value
    const pages = parseInt(pagesInput.value)
    const read = readInput.checked

    const titleError = document.getElementById('title-error')
    const authorError = document.getElementById('author-error')
    const pagesError = document.getElementById('pages-error')

    if (title === '') {
        titleError.style.display = 'block'
    } else {
        titleError.style.display = 'none'
    }

    if (author === '') {
        authorError.style.display = 'block'
    } else {
        authorError.style.display = 'none'
    }

    if(isNaN(pages) || pages <= 0) {
        pagesError.style.display = 'block'
    } else {
        pagesError.style.display = 'none'
    }

    if(title !== '' && author !== '' && !isNaN(pages) && pages > 0) {
        const newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook)
        displayBooks()
    }


    
}

function displayBooks() {
    booksDiv.textContent = ''
    myLibrary.forEach(book => {
        const titleLabel = document.createElement('p');
        titleLabel.textContent = `Title: ${book.title}`;
        const authorLabel = document.createElement('p');
        authorLabel.textContent = `Author: ${book.author}`;
        const pagesLabel = document.createElement('p');
        pagesLabel.textContent = `Pages: ${book.pages}`;
        const readLabel = document.createElement('p');
        readLabel.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        const vid = document.createElement('div');
        vid.className = 'ebook';
        vid.appendChild(titleLabel);
        vid.appendChild(authorLabel);
        vid.appendChild(pagesLabel);
        vid.appendChild(readLabel);

        vid.style.display = 'flex'
        booksDiv.appendChild(vid);
        


    })

    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false

    formDiv.style.display = 'none'
}

/* new button cancel to hide the form*/
function cancel() {
    formDiv.style.display = 'none'

    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false

}

showForm.addEventListener('click', () => {
    formDiv.style.display = 'block'
})

