var Express = require('express');
app = new Express();

app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('index', { title: 'Hey', message: 'Hello Laya and Viyan!'});
});
var server = app.listen(3000, function(){
	console.log("Listening to PORT 3000");

});
