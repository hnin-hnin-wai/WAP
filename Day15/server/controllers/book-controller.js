const Book = require('../models/books');

exports.getAllBook = (req, res, next) => { 
    res.json(Book.getAllBooks());
}

exports.getBookById = (req, res) => {
    res.json(Book.getBookById(req.params.id));
}

exports.saveBook = (req, res) => {
    const {title, isbn, publishedDate,author} = req.body;
    console.log(req.body);
    new Book(null, title, isbn, publishedDate,author).save();
    res.status(201).end("Save Successfully!");
}

exports.updateBook = (req, res) => {
    const {title, isbn, publishedDate,author} = req.body;
    const bk = new Book(null, title, isbn, publishedDate,author);
    bk.id = req.params.id;
    bk.updateById(req.params.id);
    res.status(200).json(bk);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end('Delete Successfully!');
}