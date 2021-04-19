// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require('../models/Celebrity.model')

// all your routes here
//--GET
router.get('/celebrities/create', (req, res ,next)=>{
     res.render('celebrities/new-celebrity.hbs')
})

//POST
router.post('/celebrities/create', (req, res ,next)=>{
 //grab user input
 const {name, occupation, catchPhrase} = req.body


 //create data
 CelebrityModel.create({name, occupation, catchPhrase})
 .then((data) => {
  console.log('data created')
   res.redirect('/celebrities')
 }).catch((err) => {
   console.log(err)
  res.render('celebrities/new-celebrity')
 });

})

router.get('/celebrities', (req, res ,next)=>{
 //find all celebs
 CelebrityModel.find()
 .then((data) => {

  res.render('celebrities/celebrities.hbs', {data})
   
 }).catch((err) => {
  console.log(err)
 });
 //render a page
})

module.exports = router;