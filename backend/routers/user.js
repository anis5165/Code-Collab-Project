const express = require('express');
const router = express.Router();
const Model = require('../models/user');

router.post('/add', (req,res)  => {
    console.log(req.body)
    // storing data to mogoDB
    //to add the data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
        
    });
})



router.get('/getall', (req,res) => {
    //EMPTY Bracket means get all data
    Model.find()
    .then((result) =>{
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


router.get('/getbyid/:id', (req,res) =>{
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internet Server Error'})
    });
})


router.get('/getbyemail/:email', (req,res) =>{
    //get data by email is the key in the database
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internet Server Error'})
    });
})



router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internet Server Error'})
    });
})


router.put('/update/:id', (req,res) => {
    //new:true is used to get the updated data
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internet Server Error'})
    });
})



module.exports = router;