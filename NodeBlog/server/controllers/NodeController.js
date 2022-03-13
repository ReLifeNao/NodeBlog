require('../models/database');
const Category = require('../models/Category');
const Article = require('../models/Article');

exports.homepage = async(req,res) => {
    try{
        
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Article.find({}).sort({_id:-1}).limit(limitNumber);
        const Thai2 = await Article.find({ 'category': 'Thai2' }).limit(limitNumber);
        const Thai3 = await Article.find({ 'category': 'Thai3' }).limit(limitNumber);
        const article = { latest,Thai2,Thai3 };
        res.render('index',{title:'Node Blog - Homepage', categories, article });
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


/**
 * GET /articleiD
 * Article
 */
 exports.exploreArticle = async(req,res) => {
    try{
        
        let ArticleId = req.params.id;

        const Articles = await Article.findById(ArticleId);
        res.render('article',{title:'Node Blog - Article', Articles});
    }
    catch(error){
        res.status(500).send({messages: error.message || "Error ocurred"});

    }
}

/**
 * GET /categories/:id
 * Categories By Id
*/
exports.exploreCategoriesById = async(req, res) => { 
    try {
      let categoryId = req.params.id;
      
      const limitNumber = 20;
      const categoryById = await Article.find({ 'category': categoryId }).limit(limitNumber);
      res.render('categories', { title: 'Cooking Blog - Categoreis', categoryById } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
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



/*
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

insertDymmyArticleData();*/