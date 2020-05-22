const express= require('express');
const app = express();
const port = 8000;

app.use('/',require('./routes'));

app.listen(port,function(err)
{
    if(err)
    {
        //interpolation
        console.log(`Error in running the server:${err}`);
    }

    console.log(`Server is Running on port ${port}`);
})
