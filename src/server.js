var path = require('path');
var express = require('express');

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
var app = express();

var staticPath = path.join(__dirname, '../build');
app.use(express.static(staticPath));

app.listen(port, function() {
    console.info('Server running on http://localhost:'+port, '-', env);
});
