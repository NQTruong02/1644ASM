var express = require ('express');
const ToyModel = require('../models/ToyModels');

var router = express.Router();


router.get('/', async (req, res) => {
   var Toy_Index = await ToyModel.find({})
   res.render('Toy/index', { Toy : Toy_Index })
})
router.get('/HomeCus', async (req, res) => {
   var HomeCus = await ToyModel.find({})
   res.render('Toy/HomeCus', { Toy: HomeCus })
})

router.get('/HomeAd', async (req, res) => {
   var HomeAd = await ToyModel.find({})
   res.render('Toy/HomeAd', { Toy: HomeAd })
})


router.get('/AllProduct', async (req, res) => {
   var AllProduct = await ToyModel.find({})
   res.render('Toy/AllProduct', { Toy: AllProduct })
})
router.get('/AdminAllProduct', async (req, res) => {
   var AdminAllProduct = await ToyModel.find({})
   res.render('Toy/AdminAllProduct', { Toy: AdminAllProduct })
})



router.get("/Detail/:id", (req, res) => {
   var Toy_id = req.params.id;
   ToyModel.findById(Toy_id, (err, data) => {
     if (!err) {
       res.render("Toy/Detail", { Toy: data });
     }
   });
 });


router.get('/Add', (req, res) => {
   res.render('Toy/Add');
})

router.post('/Add', async (req, res) => {
   var Toy = req.body;
   await ToyModel.create(Toy)
   .then(() => { console.log ("Add new Toy succeed !")});
   res.redirect('/Toy/AdminAllProduct');
})

router.get('/delete/:id', async(req, res) => {
   await ToyModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete Toy succeed !')});
   res.redirect('/Toy/AdminAllProduct');
})


router.get("/Edit/:id", (req, res) => {
   ToyModel.findById(req.params.id, (err, data) => {
     if (!err) {
        res.render("Toy/Edit", { Toy: data })
     }
   })
})

router.post("/Edit/:id", (req, res) => {
    ToyModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (!err) {
        console.log("Edit Toy succeed !")
        res.redirect("/Toy/AdminAllProduct")
      }
    })
})


//search admin
router.post("/searchAdmin", async (req, res) => {
   var search = req.body.name;
   var results = await ToyModel.find({ name: new RegExp(search, "i")});
   
   res.render("Toy/AdminAllProduct", { Toy: results })
})
//search customer
router.post("/searchBuy", async (req, res) => {
   var search = req.body.name;
   var resultsBuy = await ToyModel.find({ name: new RegExp(search, "i")});
   
   res.render("Toy/AllProduct", { Toy: resultsBuy })
})


module.exports = router;