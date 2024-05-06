const firebaseConfig = {
  apiKey: "AIzaSyBjoBUP3jBm7xqDyhrlzktHe5Ap4q9xdck",
  authDomain: "bookingpage-e8d0f.firebaseapp.com",
  databaseURL:
    "https://bookingpage-e8d0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookingpage-e8d0f",
  storageBucket: "bookingpage-e8d0f.appspot.com",
  messagingSenderId: "282936482055",
  appId: "1:282936482055:web:9bd51da6a4866cb2598da2",
  measurementId: "G-SEN533S304",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get the form element
const form = document.getElementById("bookingform");

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = form.name.value;
  const email = form.email.value;
  const mobile = form.mobile.value;
  const people = parseInt(form.people.value);

  // Add data to Firestore
  db.collection("bookings")
    .add({
      name: name,
      email: email,
      mobile: mobile,
      people: people,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      alert("Booking submitted successfully!");
      form.reset(); // Reset the form after submission
    })
    .catch((error) => {
      console.error("Error adding booking: ", error);
      alert("An error occurred. Please try again.");
    });
});
