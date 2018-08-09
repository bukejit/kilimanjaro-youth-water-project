var express = require('express');
var path = require('path');

var app = express();



app.use('/static/', express.static(path.join(__dirname, '../client-app/build/static/')))


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../client-app/build/index.html'));
});


app.listen(4200, function() {
    console.log('app has started listening.');
});
