let books = [
    { id: 1, title: 'Book1', isbn: 'B001', publishedDate: '01/01/2000', author: 'author1' },
    { id: 2, title: 'Book2', isbn: 'B002', publishedDate: '11/30/2018', author: 'author2' },
    { id: 3, title: 'Book3', isbn: 'B003', publishedDate: '01/25/2021', author: 'author3' },
    { id: 4, title: 'Book4', isbn: 'B004', publishedDate: '10/23/2023', author: 'author4' }
];

let count = 5;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    //view
    static getAllBooks() {
        return books;
    }

    //find by Id
    static getBookById(id) {
        return books.find(b => b.id == id);
    }

    //save
    save() {
        this.id = count++;
        books.push(this);

    }

    //update 
    updateById(id) {
        const index = books.findIndex(b => b.id == id);
        console.log(index);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        }
    }

    //delete
    static deleteById(id) {
        const index = books.findIndex(b => b.id == id);
        if (index > -1) {
            books.splice(index, 1);
        } else {
            throw new Error(`Book with ID: ${id} cannot find in DB`);
        }
    }

}
