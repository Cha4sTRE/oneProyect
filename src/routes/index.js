const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs')
});

router.get('/nosotros', (req,res)=>{
    res.render('nosotros.ejs')
});

module.exports= router;