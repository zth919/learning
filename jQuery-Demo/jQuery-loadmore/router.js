app.get('/getData', function(req, res) {
  var start = req.query.start; 
  var len = req.query.len;
  var data = []
  for (var i = 0; i < len; i++) {
    data.push('内容' + (parseInt(start) + i + 1))
  }
  res.send({
    status: 1,
    data: data
  });
});