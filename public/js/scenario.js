var sessionStart = false;
var start_time = 0;
var end_time = 0;
var userID;
var displayDelay;
var scenarioNum = 1;
var backgroundNum = 2;

    $('.modal').modal("show")

$("#register").on("click", function () {
    var user = {
        name: $("").val().trim(),
        password: $("").val().trim()
    }
    $.post("/newUser", user).then(function (data) {
        userID = data.id;
    });
});

$("#login").on("click", function () {
    var user = {
        name: $("").val().trim(),
        password: $("").val().trim()
    }
    $.get("/login", user).then(function (data) {
        if (data) {
            userID = data.id;
        } else {
            alert("incorrect login");
        }
    });
});

$(".scenarioBG").on("click", function (event) {
    console.log("session started");
    sessionStart = true;
    event.preventDefault();
    $("#textBG").hide();

    $('.scenarioBG').css('background-image', 'url(../images/scenarios/house/house.jpg)');
    var timer = setInterval(displayScenario, 8000);

});

function displayScenario() {
    $.get("/scenarios/" + scenarioNum, function (data) {
        xLocation = Math.floor(Math.random() * 80);
        yLocation = Math.floor(Math.random() * 50);

        start_time = new Date();
        var div = $("<div>");
        var img = $('<img>');
        img.attr("src", data.scenarioIMG);
        img.css("display", "block");
        div.css("position", "absolute");
        div.css("left", xLocation + "%");
        div.css("top", yLocation + "%");
        var btn = $("<button>");
        btn.addClass("btn btn-danger btn-block");
        btn.text("Shoot");
        div.append(img);
        div.append(btn);
        $(".scenarioBG").append(div);
        scenarioNum++;
        if (scenarioNum === 10) {
            clearInterval(timer);
            scenarioNum = 1;
        }
    });
    setTimeout(removeScenario, 3000);
    setTimeout(changeBackground, 4000);
}
function removeScenario() {
    $(".scenarioBG").empty();
}
function changeBackground() {
    $.get("/scenarios/" + backgroundNum, function (data) {
        $('.scenarioBG').css('background-image', 'url(' + data.scenarioBG + ')');
    });
    backgroundNum++;
    if (backgroundNum === 10) {
        backgroundNum === 2;
        $('.scenarioBG').css('background-image', 'url(../images/assets/back3.jpg)');
    }
}
function noShoot() {
    var shoot = false;
    var decTime = 3;

    //$.post
}