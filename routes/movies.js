const router = require("express").Router();

const MoviesModel = require('../models/movies.model')
const CelebritiesModel = require('../models/Celebrity.model')


router.get('/movies/create', (req, res, next)=>{

  CelebritiesModel.find()
 .then((cast) => {
  res.render('movies/new-movie.hbs', { cast })
 }).catch((err) => {
  
 });

})

//POST
router.post('/movies/create', (req, res ,next)=>{
    //grab user input
    const {title, genre, plot, cast} = req.body

    //create data
    MoviesModel.create({title, genre, plot, cast})
    .then(() => {
      res.redirect('/movies')
    }).catch((err) => {
      console.log(err)
     res.redirect('movies/new-movie')
    });
    console.log(cast)
   })

 //movies-list
 router.get('/movies', (req, res ,next)=>{
  //find all celebs
  MoviesModel.find()
  .then((data) => {
 
   res.render('movies/movies.hbs', {data})
    
  }).catch((err) => {
   console.log(err)
  });
 })

  //movie details
   router.get('/movies/:id', (req,res,next)=>{
    const {id } = req.params

    MoviesModel.findById(id)
    .populate('cast')
    .then((movies) => {
     console.log(movies)
      res.render('movies/movie-details.hbs', {movies})
    }).catch((err) => {
      console.log(err)
    
    });

   })





router.post('/movies/:id/delete', (req, res, next)=>{

  const {id} = req.params
  MoviesModel.findByIdAndRemove(id)
  .then(() => {
    
    res.redirect('/movies')
  }).catch((err) => {
    
  });

})
module.exports = router;