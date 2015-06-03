var express=require('express'),
    app = express(),
    cons= require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server= require('mongodb').Server;



app.engine('html',cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/views');
    
    var mongoclient= new MongoClient(new Server('localhost',27017,{'native_parser':true}));


    var db=mongoclient.db('test');

    app.get('/',function(req,res){

     db.collection("names").findOne({},function(err,doc){
        if(err){console.dir(err);}
        console.dir(doc);
          res.render('hello',doc);

     });
     

    });

    app.get('*',function(req,res){

    res.render('404',{applicationName:'Eureak Corportate'});
    });

mongoclient.open(function(err, mongoclient) {

    if(err) throw err;

    app.listen(8080);
    console.log('Express server started on port 8080');
});
