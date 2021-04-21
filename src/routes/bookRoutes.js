const express = require('express');
const booksRouter = express.Router();

function router(nav){


var books =[
    {
        title: 'Tom and Jerrry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: "1.jpg"
    },
    {
        title: 'Arabian Nights',
        author: 'Sir Richard Burton ',
        genre: 'Folk Tales',
        img: "2.jpg"
    },
    {
        title: 'Romeo And Juliet',
        author: ' William Shakespeare',
        genre: 'Shakespearean tragedy',
        img: "3.jpg"
    },
    {
        title: 'Harry Potter',
        author: 'J.K.Rowling',
        genre: 'Fantasy',
        img: "4.jpg"
    }
]



booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,title: 'Library',
        books
    });
});

booksRouter.get('/:i',function(req,res){
    const i = req.params.i
    res.render('book',{ nav,title: 'Library',
        book: books[i]
    });
});
  return booksRouter;
}


module.exports = router;
