
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partial = function (req, res) {
  var name = req.params.name;
  res.render('partials/partial' + name);
};

exports.examples = function (req, res) {
  var name = req.params.name;
  res.render('partials/examples/' + name);
};