const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('539e4d83c2fb46d5bc3e6234959361c2');
var response;
module.exports = function(app) {


  app.get("/api/news", function(req, res) {
newsapi.v2.topHeadlines({
  sources: '',
  q: 'police'
}).then(response => {
  // console.log(response);
  console.log(response.articles[7].title)
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
  res.send(response);
});

});
 
};
  