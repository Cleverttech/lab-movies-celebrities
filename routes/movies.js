const router = require("express").Router();

const MoviesModel = require('../models/movies.model')

//Require celebrity Model
const CelebritiesModel = require('../models/Celebrity.model')

//--CREATE- Movie using celebrity Model to grab cast Array
router.get('/movies/create', (req, res, next)=>{
 //grabbing data from the Celebrity Model
 
  CelebritiesModel.find()
 .then((cast) => {
  res.render('movies/new-movie.hbs', { cast })
 }).catch((err) => {
  
 });

})

//POST__userinput to create movie
router.post('/movies/create', (req, res ,next)=>{
    //grab user input
    const {title, genre, plot, cast} = req.body

    //create data
    MoviesModel.create({title, genre, plot, cast})
    .then(() => {
      res.redirect('/movies')
    }).catch((err) => {
      console.log(err)
     res.render('movies/new-movie')
    });
    console.log(cast)
   })

 //GET-- movies-list
 router.get('/movies', (req, res ,next)=>{
  //find all celebs
  MoviesModel.find()
  .then((data) => {
 
   res.render('movies/movies.hbs', {data})
    
  }).catch((err) => {
   console.log(err)
  });
 })

  //GET--movie details
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


//UPDATE--GET--
router.get('/movies/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
 
  MoviesModel.findById(id)
  .then((movie) => {
   res.render('movies/edit-movie.hbs', {movie})
  })
  .catch((err) => {
   console.log(err) 
  });
});

//POST--DELETE
router.post('/movies/:id/delete', (req, res, next)=>{

  const {id} = req.params
  MoviesModel.findByIdAndRemove(id)
  .then(() => {
    
    res.redirect('/movies')
  }).catch((err) => {
    
  });

})
module.exports = router;