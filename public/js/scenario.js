var sessionStart = false;
var start_time = 0;
var end_time = 0;
var userID;

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

$("#scenarioStart").on("click", function (event) {
    console.log("session started");
    sessionStart = true;
    event.preventDefault();

    for (let i = 0; i < 10; i++) {

        displayDelay = Math.floor(Math.random() * 7 + 1);

        $.get("/scenario/:" + i, function (data) {

            $(".scenarioBG").attr("src", data.background);
            setTimeout(displayScenario(), displayDelay);

            if (sessionStart === true) {

                document.addEventListener('keydown', function (event) {
                    if (event.keyCode == 32) {
                        end_time = new Date();
                        var elapsed_ms = end_time - start_time;
                        var seconds = Math.round(elapsed_ms / 1000);

                        var stats = {
                            userID: userID,
                            shoot: true,
                            decTime: seconds,
                            scenarioID: i
                        }

                        $.post("/post/newStat", stats)

                            .then(function (data) {
                                console.log(data);
                            });

                    }
                });
            }
        });
    }
    sessionStart = false;
});

function displayScenario(image) {
    xLocation = Math.floor(Math.random() * 100);
    yLocation = Math.floor(Math.random() * 100);

    start_time = new Date();

    var img = ('<img>');
    img.attr("src", "image");
    img.css("position", "absolute");
    img.css("left", xLocation);
    img.css("top", yLocation);

    $(".scenarioBG").append(img);

}

function noShoot() {
    var shoot = false;
    var decTime = 3;

    //$.post
}