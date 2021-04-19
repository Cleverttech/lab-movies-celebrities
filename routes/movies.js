const router = require("express").Router();

const MoviesModel = require('../models/movies.model')
const CelebrityModel = require('../models/Celebrity.model')

router.get('/movies/create', (req, res, next)=>{

  CelebrityModel.find()
 .then((data) => {
   console.log(data)
  res.render('movies/new-movie.hbs', {data})
 }).catch((err) => {
   
 });

})

//POST
router.post('/movies/create', (req, res ,next)=>{
    //grab user input
    const {title, genre, plot, cast} = req.body

    //create data
    MoviesModel.create({title, genre, plot, cast})
    .then((data) => {
     console.log('data created')
      res.redirect('/movies')
    }).catch((err) => {
      console.log(err)
     res.render('movies/new-movie')
    });
   
   })


router.get('/movies', (req, res ,next)=>{
 //find all celebs
 MoviesModel.find()
 .then((data) => {

  res.render('movies/movies.hbs', {data})
   
 }).catch((err) => {
  console.log(err)
 });
})



// router.post('movies/create', (req, res, next)=>{

// })
module.exports = router;