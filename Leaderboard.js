firebase.database().ref("users").once("value", function(snapshot) {

    let basketballScores = [];

    snapshot.forEach(function(childSnapshot) {
        basketballScores.push(childSnapshot.val());
    });

    basketballScores.sort(function(a, b) {
        return (b.Basketball || 0) - (a.Basketball || 0);
    });

    let leaderboard = document.getElementById("basketballList");
    leaderboard.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        if (basketballScores[i]) {

            let player = basketballScores[i];

            leaderboard.innerHTML +=
                "<li>" +
                player.displayName +
                " - " +
                (player.Basketball || 0) +
                "</li>";
        }
    }
});


firebase.database().ref("users").once("value", function(snapshot) {

    let geoDashScores = [];

    snapshot.forEach(function(childSnapshot) {

        geoDashScores.push(childSnapshot.val());

    });

    geoDashScores.sort(function(a, b) {

        return (b.GeoDash || 0) - (a.GeoDash || 0);

    });

    let leaderboard = document.getElementById("geoDashList");

    leaderboard.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        if (geoDashScores[i]) {

            let player = geoDashScores[i];

            leaderboard.innerHTML +=
                "<li>" +
                player.displayName +
                " - " +
                (player.GeoDash || 0) +
                "</li>";

        }

    }

});