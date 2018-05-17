var grid = $('.grid-item');

$.get("/api/news", function(data) {
    $('.grid-item').eq(0).html(data.articles[0].title);
    for (let x = 0; x < data.articles.length; x++) {
     
            var link = $("<a>");
            link.attr("href", data.articles[x].url)
           grid.eq(x).css("background-image", `url(${data.articles[x].urlToImage}`)
           grid.eq(x).css("background-size", "cover")
           grid.eq(x).css("background-repeat", "no-repeat")
           grid.eq(x).css("background-position", "center")

       grid.eq(x).html(`<a class=text-white href=${data.articles[x].url}>${data.articles[x].title}</a>`);
    }
    for (let y = 0; y < grid.length; y++) {
            if(grid.eq(y)[0].innerHTML === "") {
                grid.eq(y).hide();
            }
    }
})