const firebaseConfig = {
    apiKey: "AIzaSyC5ws8vODpWsEjh_9lFjLbNilKdJ5miiiA",
    authDomain: "booking-3c528.firebaseapp.com",
    databaseURL: "https://booking-3c528-default-rtdb.firebaseio.com",
    projectId: "booking-3c528",
    storageBucket: "booking-3c528.appspot.com",
    messagingSenderId: "378143886888",
    appId: "1:378143886888:web:b53b6424a4bdac98102f1d"
  };

 firebase.initializeApp(firebaseConfig);

var restaurantPageRef = firebase.database().ref("booking");

document.getElementById("bookingForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var mobile = getElementVal("mobile");
    var people = getElementVal("people");
    console.log(name, email, mobile, people);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};