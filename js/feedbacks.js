var config = {
    apiKey: "AIzaSyDDZYP5ZFSqjatf1vrUcUVj9PSZrL6cKLg",
    authDomain: "authentification-dabdd.firebaseapp.com",
    databaseURL: "https://authentification-dabdd.firebaseio.com",
    projectId: "authentification-dabdd",
    storageBucket: "authentification-dabdd.appspot.com",
    messagingSenderId: "111537419544"
  };
  firebase.initializeApp(config);

  document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getValues('name');
	var slide = getValues('slide');
	var message = getValues('message');
	var track = getValues('track');

	ab3ith(name,slide,message,track);

		document.getElementById('contactForm').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function ab3ith(name,slide,message,track){
	var feedback = feedbacks.push();
	feedback.set({
		student: name,
		slide: slide,
		msata: message,
		track: track
	});
}
var auth = firebase.auth();

var logOut=document.getElementById('outBtn');

    logOut.addEventListener('click', e=>{
        window.location.href="index.html";
        auth.signOut();
    
    alert.style.display = "none";
})
    
auth.onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){ logOut.classList.remove('hide'); }
    else{ logOut.classList.add('hide')}
})