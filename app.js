const path = require('path');

const express = require('express');


const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);



app.use(function(req, res) { //다른 urlr경로에서 처리되지 않은(페이지를 찾지 못한 404) 요청이 처리될 것임.
    res.status(404).render('404');
})

app.use(function(error, req, res, next) {
    res.status(500).render('500');
} )

app.listen(3000);