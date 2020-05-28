const express= require('express');
const app = express();
const port = 8000;
const Item =require('./models/item');
const db=require('./config/mongoose');
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('static'));
app.use(express.urlencoded());


// route for home page
app.get('/',function(req,res){

    Item.find({},function(err,items){
        if(err)
        {
            console.log('Error in fetching item');
            return;
        }

        return res.render('home',
        {
            title:'home',
            item_list:items
        });

    });
   
});

//route for creating the new item
app.post('/create-item',function(req,res)
{

    //itemList.push(req.body);
    Item.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newitem){
        if(err)
        {
           console.log('error in creaing the item',err);
           return; 
        }
        console.log('*****',newitem);
        res.redirect('back');
    });

});

//route for deleting the items
app.get('/delete-items',function(req,res)
{
    
    // it is getting the checks id from the front end
    let id=req.query;

    console.log(req.query);
    for(let key of Object.keys(id))
    {
        console.log("key ",key);
        Item.findByIdAndDelete(key,function(err,item)
        {
            if(err)
            {
                console.log("error in deleting item ",err);
                return;
            }
            console.log("item deleted successsfully",item);
        });
    }

    return res.redirect("back");
});

// for listening od server
app.listen(port,function(err)
{
    if(err)
    {
        //interpolation
        console.log(`Error in running the server:${err}`);
    }
    // just to check whether server is up or not
    console.log(`Server is Running on port ${port}`);
})
