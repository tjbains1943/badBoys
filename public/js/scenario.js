var sessionStart = false;

//user info
var userID;
var userName;
var classID;

//scenario info
var scenarioNum = 1;
var backgroundNum = 2;

//stat info
var shoot = false;
var timer;
var armed;
var title;
var startSec = 0;
var endSec = 0;

$("#statsBtn").on("click", function (event) {
    event.preventDefault();
    $("#statCon").empty();
    var search = $("#statsInput").val().trim();

    $.get("/stats/" + search, function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            var statCard = $("<div>");
            var user = $("<div>");
            user.text(data[i].userName + ":");
            statCard.append(user);
            var stats = $("<div>");
            for (let j = 0; j < data[i].ScenarioStats.length; j++) {
                var row = $("<div>");
                var title = $("<span>");
                title.text("Title: " + data[i].ScenarioStats[j].title + " | ");
                var shot = $("<span>");
                shot.text("Shot: " + data[i].ScenarioStats[j].shot + " | ");
                var time = $("<span>");
                time.text("Time: " + data[i].ScenarioStats[j].time + " | ");
                var armed = $("<span>");
                armed.text("Armed: " + data[i].ScenarioStats[j].armedWith);

                row.append(title);
                row.append(shot);
                row.append(time);
                row.append(armed);

                stats.append(row);
            }
            statCard.append(stats);
            $("#statCon").append(statCard);
        }
    });
});

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
    $("#pointer").hide();
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

        var start_time = new Date();
        startSec = start_time.getTime() / 1000;

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
        if (scenarioNum > 10) {
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

    var end_time = new Date();
    endSec = end_time.getTime() / 1000;

    var stats = {
        title: title,
        armedWith: armed,
        shot: true,
        time: endSec - startSec,
        UserId: userID
    }
    $.post("/stats", stats).then(function (data) {
        console.log(data);
        shoot = true;
    });
});
function removeScenario() {
    $(".scenarioBG").empty();
    if (shoot === false) {
        var stats = {
            title: title,
            armedWith: armed,
            shot: false,
            time: 3,
            UserId: userID
        }
        $.post("/stats", stats).then(function (data) {
            console.log(data);
        });
    }
}
function changeBackground() {
    shoot = false;
    $.get("/scenarios/" + backgroundNum, function (data) {
        $('.scenarioBG').css('background-image', 'url(' + data.scenarioBG + ')');
    });
    backgroundNum++;
    if (backgroundNum > 10) {
        backgroundNum === 2;
        $('.scenarioBG').css('background-image', 'url(../images/assets/back3.jpg)');
    }
}
