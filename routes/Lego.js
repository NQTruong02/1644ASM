var express = require ('express');
const LegoModel = require('../models/LegoModels');

var router = express.Router();

router.get('/LegoIndex', async (req, res) => {
    var LegoIndex = await LegoModel.find({})
    res.render('Lego/LegoIndex', { Lego : LegoIndex })
 })

 router.get('/LegoCus', async (req, res) => {
    var LegoCus = await LegoModel.find({})
    res.render('Lego/LegoCus', { Lego: LegoCus })
 })


 
router.get("/Detail/:id", (req, res) => {
    //lấy giá trị id của document gửi từ url
    var Lego_id = req.params.id;
    //tìm kiếm document trong collection theo id
    LegoModel.findById(Lego_id, (err, data) => {
      if (!err) {
        //render ra file detail chứa dữ liệu của document
        res.render("Lego/Detail", { Lego: data });
      }
    });
  });
 
 
 router.get('/Add', (req, res) => {
    res.render('Lego/Add');
 })
 
 router.post('/Add', async (req, res) => {
    var Lego = req.body;
    await LegoModel.create(Lego)
    .then(() => { console.log ("Add new Lego succeed !")});
    res.redirect('/Lego/LegoIndex');
 })
 
 router.get('/delete/:id', async(req, res) => {
    await LegoModel.findByIdAndDelete(req.params.id)
    .then(() => { console.log ('Delete Lego succeed !')});
    res.redirect('/Lego/LegoIndex');
 })
 
 
 router.get("/Edit/:id", (req, res) => {
    LegoModel.findById(req.params.id, (err, data) => {
      if (!err) {
         res.render("Lego/Edit", { Lego: data })
      }
    })
 })
 
 router.post("/Edit/:id", (req, res) => {
     LegoModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
       if (!err) {
         console.log("Edit Lego succeed !")
         res.redirect("/Lego/LegoIndex")
       }
     })
 })
 
 
 
 
 
 //search admin
 router.post("/searchAdmin", async (req, res) => {
    var search = req.body.name;
    var results = await LegoModel.find({ name: new RegExp(search, "i")});
    
    res.render("Lego/LegoIndex", { Lego: results })
 })
 //search customer
 router.post("/searchLego", async (req, res) => {
    var search = req.body.name;
    var resultsLego = await LegoModel.find({ name: new RegExp(search, "i")});
    
    res.render("Lego/LegoCus", { Lego: resultsLego })
 })
 
 
 
 
 
 
 
 
 module.exports = router;

module.exports = router;
