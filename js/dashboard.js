var config = {
    apiKey: "AIzaSyDDZYP5ZFSqjatf1vrUcUVj9PSZrL6cKLg",
    authDomain: "authentification-dabdd.firebaseapp.com",
    databaseURL: "https://authentification-dabdd.firebaseio.com",
    projectId: "authentification-dabdd",
    storageBucket: "authentification-dabdd.appspot.com",
    messagingSenderId: "111537419544"
};
firebase.initializeApp(config);
var auth = firebase.auth();

var logOut = document.getElementById('outBtn');

var feedbacks = firebase.database().ref('feedbacks');
var message = []

logOut.addEventListener('click', e => {
    window.location.href = "index.html";
    auth.signOut();
    alert.style.display = "none";
})

auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) { logOut.classList.remove('hide'); }
    else { logOut.classList.add('hide') }
})

getData();

function getData() {
    $("#feedbacks").html("");
    feedbacks.once('value').then(function (snapshot) {
        snapshot.forEach(showData);
    }).then(function () {
        $('#myTable').DataTable();
    })

}

function showData(singlesnapshot) {
    var feedback = singlesnapshot.val();
    if (message.indexOf(singlesnapshot.key) == -1)
        $("#feedbacks").append("<tr><td>" + feedback.student + "</td><td>" + feedback.slide + "</td><td>" + feedback.msata + "</td><td>" + feedback.track + "</td></tr>")
    message.push(singlesnapshot.key)
}
