const showForm = document.getElementById('showForm')
const formDiv = document.getElementById('form')
const booksDiv = document.getElementById('books')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')

const cancelButton = document.getElementById('cancelButton') // this is the cancel button
const saveButton = document.getElementById('saveButton') // this is the save button

let myLibrary = []

// Switching to class method
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    addBooktoLibrary() {
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
            this.displayBooks()
        }
    
    
        
    }

    displayBooks() {
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
            const removeButton = document.createElement('button');
            const readButton = document.createElement('button');
    
            removeButton.className = 'remove-button';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                myLibrary.splice(myLibrary.indexOf(book), 1)
                this.displayBooks()
            })
    
            readButton.className = 'read-button';
            readButton.textContent = 'Read';
            readButton.addEventListener('click', () => {
                book.read = !book.read
                this.displayBooks()
            })
    
            
            vid.className = 'ebook';
            vid.appendChild(titleLabel);
            vid.appendChild(authorLabel);
            vid.appendChild(pagesLabel);
            vid.appendChild(readLabel);
            vid.appendChild(removeButton);
            vid.appendChild(readButton);
    
            vid.style.display = 'flex'
            booksDiv.appendChild(vid);
            
    
    
        })
    
        titleInput.value = ''
        authorInput.value = ''
        pagesInput.value = ''
        readInput.checked = false
    
        formDiv.style.display = 'none'
    }


    cancel() {
        formDiv.style.display = 'none'
    
        titleInput.value = ''
        authorInput.value = ''
        pagesInput.value = ''
        readInput.checked = false
    
    }
    
}


const newBook = new Book()

showForm.addEventListener('click', () => {
    formDiv.style.display = 'block'
})

saveButton.addEventListener('click', () => {
    newBook.addBooktoLibrary()
})

cancelButton.addEventListener('click', () => {
    newBook.cancel()
})




