let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let multer = require('multer');
let fs = require('fs');
let path = require('path');
//Creating cookies
let cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', (req, res)=>{
	console.log("Cookies: ", req.cookies);
});

app.use(bodyParser.urlencoded({extended: true}));
let upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb){
			//Specify the directory where you want to save the file.
			cb(null, __dirname + "/tmp");
		},
		filename(req, file, cb){
			//Specify the filename for the uploaded file
			const [uniqueSuffix, ext] = [`myfile`,path.extname(file.originalname)];
			cb(null, `${file.fieldname}-${uniqueSuffix+ext.toLowerCase()}`);
		}
	})
});

//Serve static files
app.use(express.static('public'));
app.get('/index.html', (req, res)=>{
	res.sendFile(__dirname + "/index.html");
});
//app.use();


//Upload some files
app.post('/file_upload',upload.single('avatar'), (req, res)=>{
	const {originalname: name, mimetype: type, size} = req.file;
	res.json({name, type, size});
});


//returns a response from a get request
app.get('/process_get', (req, res)=>{
	//Prepare output in JSON format
	response = {
		first_name: req.query.first_name,
		last_name : req.query.last_name
	};
	console.log(response);
	res.json(response);
});

app.post('/process_post', (req, res)=>{
	//Prepare output in JSON format
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	console.log(response);
	res.json(response);
});

//This responds with "Hello World" on the homepage
app.get('/', (req, res)=>{
	console.log("Got a GET request for the homepage");
	res.send("Hello GET");
	//res.sendFile(__dirname + '/index.html');
});

//This reponds a POST request for the homepage
app.post('/', (req, res)=>{
	console.log("Got a POST request for the homepage");
	res.send("Hello POST");
});

//This responds a DELETE request for the /del_user page.
app.delete('/del_user', (req, res)=>{
	console.log("Got a DELETE request for /del_user");
	res.send("Hello DELETE");
});

//This responds a GET request for the /list_user page.
app.get('/list_user', (req, res)=>{
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
});

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get(/ab(.*)cd/, (req, res)=>{
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
});

let server = app.listen(8081, ()=>{
	let host = server.address().address;
	let port = server.address().port;

	console.log(`Example app listening at http://${host}:${port}`)
});