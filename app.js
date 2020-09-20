const express 	 = require("express"),
	  app 		 = express(),
	  mongoose 	 = require('mongoose'),
	  bodyParser = require("body-parser"),
	  Gallery	 = require("./models/gallery")

//App Config
mongoose.connect('mongodb://localhost:27017/Raxxla',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs")
app.use(express.static("public"))
app.use("js",express.static(__dirname + "public/js"))

app.get("/",function(req,res){
	res.redirect("/index")
})

//index Route
app.get("/index",function(req,res){
	res.render("index")
})

//Gallery Route
app.get("/Gallery",function(req,res){
	Gallery.find({},function(err,Gallery){
		if (err) {
			console.log(err)
		} else {
			res.render("Gallery",{Gallery:Gallery})
		}
	})
})

//newRoute	
app.get("/Gallery/new",function(req,res){
	res.render("new")
})

//Post Route
app.post("/Gallery",function(req,res){
	Gallery.create(req.body.Gallery,function(err,gallery){
		if(err){
			console.log(err)
		} else {
			console.log("A new Photo has been added")
			console.log(gallery)
			res.redirect("/Gallery")
		}
	})
})

//Show route
app.get("/Gallery/:id", function(req,res){
	Gallery.findById(req.params.id, function(err,foundGallery){
		if(err){
			console.log(err)
		} else {
			res.render("show",{Gallery:foundGallery})
		}
	})
})


app.listen(3000,function(){
	console.log("servers are running")
})
