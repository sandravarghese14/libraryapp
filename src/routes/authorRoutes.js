const express = require("express");
const authorsRouter = express.Router();
function router(nav){
    var authors =[
        {
            name : "Joseph Barbera",
            dob : "24 March 1911",
            ntn : "American",
            img : "1.1.jpg"
        },
        {
            name : "Sir Richard Burton",
            dob : "21 January 1908",
            ntn : "English",
           img: "2.1.jpg"
        },
        {
            name : " William Shakespeare",
            dob : "April 1564",
            ntn : "English",
            img: "3.jpg"
        },
        {
            name : "J.K.Rowling",
            dob : "31 July 1965",
            ntn : "English",
           img: "4.1.jpg"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author: authors[id]
        });
    });
    return authorsRouter;
}

module.exports = router;