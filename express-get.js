var express= require('express'),
    app = express(),
    cons = require('consolidate');

    app.engine('html',cons.swig);
    app.set('views',__dirname+'/views');
    app.set('view engine','html');
    app.use(app.router);

    app.get('/:name',function(req,res,next){
var name=req.params.name;
var getvar1 = req.query.getvar1;
var getvar2 = req.query.getvar2;

res.render('hello_getEx',{name:name,val1:getvar1,val2:getvar2});


    });


// app.get('/*', function(req, res, next) {
//     var name = req.params.name;
//     res.render('hello', { name : name});
// });

    app.listen(3000);
    console.log('Express listening at 3000');