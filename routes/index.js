const express = require('express');
const router = express.Router();


const CV = require('../model/CV')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'MyCV' });
});
router.post('/coment', function (req, res, next) {
  const coment = new CV()
  coment.name = req.body.name,
  coment.coment = req.body.coment,
  coment.save((err)=>{
    if(err){
      console.log(err);
    }
    else{res.redirect('/')}
  })
});


module.exports = router;
