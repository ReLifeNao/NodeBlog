require('../models/database');
const Category = require('../models/Category');
const Article = require('../models/Article');

exports.homepage = async(req,res) => {
    try{
        
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('index',{title:'Node Blog - Homepage', categories});
    }
    catch(error){
        res.status(500).send({messages: error.message || "Error ocurred"});

    }
}


/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async(req,res) => {
    try{
        
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories',{title:'Node Blog - Categories', categories});
    }
    catch(error){
        res.status(500).send({messages: error.message || "Error ocurred"});

    }
}











/*
async function insertDymmyCategoryData(){
    try{
        await Category.insertMany([
            {
                "name": "thai",
                "image": "thaia.jpg"
            },
            {
                "name": "thai2",
                "image": "thai2.jpg"
            },
            {
                "name": "thai3",
                "image":"thai3.jpg"
            },
            {
                "name": "thai4",
                "image": "tha4.jpg"
            },
            {
                "name": "thai5",
                "image": "thai5.jpg"
            },
            {
                "name": "thai6",
                "image": "thai6.jpg"
            },
        ]);
    } catch(error){
        console.log('errx',+error)
    }
}

insertDymmyCategoryData();*/




async function insertDymmyArticleData(){
    try{
        await Article.insertMany([{
            "name": "Recipe Name Goes Here",
         "description": `Recipe Description Goes Here`,
         "email": "recipeemail@raddy.co.uk",
         "keywords": [
           "1 level teaspoon baking powder",
           "1 level teaspoon cayenne pepper",
         "1 level teaspoon hot smoked paprika",
         ],
        "category": "Thai", 
         "image": "southern-friend-chicken.jpg"
        }]);
    } catch(error){
        console.log('errx',+error)
    }
}

insertDymmyArticleData();