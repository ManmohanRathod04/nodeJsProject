const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')

router.get('/', (req, res) => {
  res.render('index', {viewTitle: 'Home | Loan5cr'})
  // res.render('templates/views/index', {viewTitle: 'Insert Employee data'})

})

router.get('/about', (req, res) => {
  res.render('about', {viewTitle: 'About | Loan5cr'})
})
router.get('/projectfinance', (req, res) => {
  res.render('projectfinance', {viewTitle: 'projectfinance | Loan5cr'})
})
router.get('/corporatefinance', (req, res) => {
  res.render('corporatefinance', {viewTitle: 'corporatefinance | Loan5cr'})
})
router.get('/exportfinance', (req, res) => {
  res.render('exportfinance', {viewTitle: 'exportfinance | Loan5cr'})
})
router.get('/privatefinance', (req, res) => {
  res.render('privatefinance', {viewTitle: 'privatefinance | Loan5cr'})
})
router.get('/homeloan', (req, res) => {
  res.render('homeloan', {viewTitle: 'homeloan | Loan5cr'})
})
router.get('/lapproperty', (req, res) => {
  res.render('lapproperty', {viewTitle: 'lapproperty | Loan5cr'})
})
router.get('/businessloan', (req, res) => {
  res.render('businessloan', {viewTitle: 'Business Loan | Loan5cr'})
})
router.get('/startuploan', (req, res) => {
  res.render('startuploan', {viewTitle: 'startuploan | Loan5cr'})
})
router.get('/mudraloan', (req, res) => {
  res.render('mudraloan', {viewTitle: 'mudraloan | Loan5cr'})
})
router.get('/workingcapital', (req, res) => {
  res.render('workingcapital', {viewTitle: 'workingcapital | Loan5cr'})
})
router.get('/npa', (req, res) => {
  res.render('npa', {viewTitle: 'npa | Loan5cr'})
})
router.get('/lowcibil', (req, res) => {
  res.render('lowcibil', {viewTitle: 'lowcibil | Loan5cr'})
})
router.get('/faq', (req, res) => {
  res.render('faq', {viewTitle: 'faq | Loan5cr'})
})
// router.get('/npa', (req, res) => {
//   res.render('npa', {viewTitle: 'npa | Loan5cr'})
// })


// router.post('/admin', (req, res) => {
//   res.render('admin', {viewTitle: 'Dashboard | Loan5cr'})
// })
router.get('/contact', (req, res) => {
  res.render('contact', {viewTitle: 'Contact | Loan5cr'})
})


// data insert here 
router.post('/admin',(req,res)=>{
    var customer = new Customer()   
  customer.name = req.body.name
  customer.mobile = req.body.mobile
  customer.email = req.body.email
  customer.message = req.body.message
  customer.save((err,doc)=>{
    if(!err){
      res.redirect('admin');
    }else{
      if(err.name=='ValidationError'){
        handleValidationError(err, req.body);
                res.render('index', {viewTitle: 'Insert Employee data',
          customer: req.body
        });
      }
    }
  })
})

// validation 
function handleValidationError(err, body) {
  for (field in err.errors) {
      switch(err.errors[field].path){
          case 'name':
              body['nameError'] = err.errors[field].message;
              break;
          case 'email':
              body['emailError'] = err.errors[field].message;
              break;   
          default:
              break;    
      }
  }
}
// for find data
router.get('/admin', (req, res) => {
  // res.json("From admin");
  Customer.find((err, docs) => {
    if (!err) {
      res.render('admin', {
        viewTitle: 'Dashboard | Loan5cr',
        custolist: docs,
      })
    }else {
      console.log('Error in retriving employee list : ' , err);
    }
  })
});




// delete
router.get('/delete/:id', (req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/admin')
    }else {
      console.log('Error in customer delete : ' + err)
    }
  })
})


module.exports = router
