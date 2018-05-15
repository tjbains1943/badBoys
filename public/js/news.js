$.get("/api/news", function(data) {
    console.log(data);
    console.log(data.articles[0].title)
    $('.grid-item').eq(0).html(data.articles[0].title);
    for (let x = 0; x < data.articles.length; x++) {
        if (x === 1 || x === 5 || x === 8 || x=== 6 || x=== 18 || x=== 17) {
            console.log(data.articles[1].urlToImage);
            var img = $("<img>");
            img.attr("src", data.articles[x].urlToImage);
            $('.grid-item').eq(x).css("background-image", `url(${data.articles[x].urlToImage}`)
            $('.grid-item').eq(x).css("background-size", "cover")
            $('.grid-item').eq(x).css("background-repeat", "no-repeat")
            $('.grid-item').eq(x).css("background-position", "center")


            $('.grid-item').eq(x).html(data.articles[x].title);
            $('.grid-item').eq(x).append(img);
        }
        $('.grid-item').eq(x).html(data.articles[x].title);
        
    }
})