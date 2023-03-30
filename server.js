//Load the express module.
const express = require('express');

//Create an Express application to access all functionality of the module.
const app = express();

//Create a variable that stores the port number (i.e., 1337).
const port = 1337;

//Create a variable that stores the path to the “public” directory inside your “myExpressSite” directory. 
const dir = __dirname + '/public/';

app.use(express.static('public'));

//Specify “css” as a root directory from which to serve static files.
app.use(express.static('public/styles'));

//Specify “images” as a root directory from which to serve static files.
app.use(express.static('public/images'));

//Specify “js” as a root directory from which to serve static files.
app.use(express.static('public/js'));

app.use(express.static('public/data'));

//Serve each web page based on the path that a user has navigated to.
app.get('/', function(request, response) {
    response.sendFile(dir + 'index.html');
});

app.get('/index', function(request, response) {
    response.sendFile(dir + 'index.html');
});

app.get('/about', function(request, response) {
    response.sendFile(dir + 'about.html');
});

app.get('/experience', function(request, response) {
    response.sendFile(dir + 'experience.html');
});

app.get('/contact', function(request, response) {
    response.sendFile(dir + 'contact.html');
});

//Add a wildcard for any route not defined and respond by serving the HTML file for the 404 page.
app.get('/*', function(request, response) {
    response.sendFile(dir + '404.html');
});

//Make the app listen on the port and output the URL to access the server to the console.
app.listen(port, function() {
    console.log('Listening on http://localhost:' + port + ' press ctrl+c to quit.')
})