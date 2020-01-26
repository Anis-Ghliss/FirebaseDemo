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

document.getElementById('btn1').addEventListener('click', function () {
    window.location.href = "feedbacks.html"
})
document.getElementById('btn2').addEventListener('click', function () {
    window.location.href = 'dashboard.html'
})

logOut.addEventListener('click', e => {
    window.location.href = "index.html";
    auth.signOut();
    alert.style.display = "none";
})

auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) { logOut.classList.remove('hide'); }
    else { logOut.classList.add('hide') }
})