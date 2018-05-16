var sessionStart = false;
var start_time = 0;
var end_time = 0;
var userID;
var userName;
var classID;
var scenarioNum = 1;
var backgroundNum = 2;
var shoot = false;
var timer;
var armed;
var title;

$("#register").on("click", function (event) {
    event.preventDefault();
    var user = {
        userName: $("#registerUser").val().trim(),
        password: $("#registerPassword").val().trim(),
        classID: $("#registerClass").val().trim()
    }
    $.post("/user", user).then(function (data) {
        userName = data.userName;
        userID = data.id;
        classID = data.classID;
    });
});

$("#login").on("click", function (event) {
    event.preventDefault();
    var user = {
        userName: $("#1").val().trim(),
        password: $("#2").val().trim()
    }
    console.log(user.userName);
    console.log(user.password);
    $.post("/login", user).then(function (data) {
        if (data) {
            console.log(data);
            userName = data.userName;
            userID = data.id;
            classID = data.classID;
        } else {
            alert("incorrect login");
        }
    });
});

$("#start").on("click", function (event) {
    $("#start").hide();
    console.log("session started");
    sessionStart = true;
    event.preventDefault();

    $('.scenarioBG').css('background-image', 'url(../images/scenarios/house/house.jpg)');
    timer = setInterval(displayScenario, 8000);

});

function displayScenario() {
    $.get("/scenarios/" + scenarioNum, function (data) {
        xLocation = Math.floor(Math.random() * 80);
        yLocation = Math.floor(Math.random() * 50);

        armed = data.armed;
        title = data.title;

        start_time = new Date();

        var div = $("<div>");
        var img = $('<img>');
        img.attr("src", data.scenarioIMG);
        img.css("display", "block");
        div.css("position", "absolute");
        div.css("left", xLocation + "%");
        div.css("top", yLocation + "%");
        var btn = $("<button>");
        btn.addClass("btn btn-danger btn-block shoot");
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
$(document).on("click", ".shoot", function (event) {
    event.preventDefault();
    $(".scenarioBG").empty();
    console.log("shoot");

    var stats = {
        title: title,
        armedWith: armed,
        shot: true,
        time: 6,
        UserId: userID
    }
    $.post("/stats", stats).then(function (data) {
        console.log(data);
    });
});
function removeScenario() {
    $(".scenarioBG").empty();
    if (shoot === false) {

    }
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