//all routes go below (Inside of module.exports block)
module.exports = function (app) {
  app.get('/', function(req,res){
    res.render("index")
  });
};

