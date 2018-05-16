var sessionStart = false;
var start_time = 0;
var end_time = 0;
var userID;
var userName;
var classID;
var scenarioNum = 1;
var backgroundNum = 2;

<<<<<<< HEAD
$("#register").on("click", function (event) {
    event.preventDefault();
=======
    $('.modal').modal("show")

$("#register").on("click", function () {
>>>>>>> 437b2626a606b86484e6bf4827ae7fb19ce75703
    var user = {
        userName: $("#registerUser").val().trim(),
        password: $("#registerPassword").val().trim(),
        classID: $("#registerClass").val().trim()
    }
    $.post("/user", user, ).then(function (data) {
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
    $.get("/login", user).then(function (data) {
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