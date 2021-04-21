const express = require('express');

const app = express();

const nav =  [

{link:'/books',name:'Books'},

{link:'/authors',name:'Authors'}];


const nav1 = [
    
    {
    link:'/signin',name:'Login'
},

{
    link:'/signup',name:'SignUp'
}];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const inRouter = require('./src/routes/inRoutes')(nav1);
const indexRouter = require('./src/routes/indexRoutes')(nav1);
const supRouter = require("./src/routes/supRoutes")(nav1);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',inRouter);
app.use('/index',indexRouter);
app.use('/signup',supRouter);

app.get('/',function(req,res){
    res.render("index",
    {   nav1,
        title: 'Library'
        });
});
app.listen(5000);