const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('539e4d83c2fb46d5bc3e6234959361c2');
const request = require('request');
const fbiKey ="o1PyZZwYdoTpM9yj26mZp99pGlPmdiS2psiefpab";
module.exports = function(app) {


  app.get("/api/news", function(req, res) {
newsapi.v2.topHeadlines({
  sources: '',
  q: 'police'
}).then(response => {
  // console.log(response);
  console.log(response.articles[1].title)
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
  res.send(response);
});

});
 
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

};

request(`https://api.usa.gov/crime/fbi/ucr/estimates/national?page=1&per_page=10&output=json&api_key=${fbiKey}`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
});
  