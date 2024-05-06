const firebaseConfig = {
    apiKey: "AIzaSyDmPEtEsNtxnGt-i4rYdTztfGSoAy2gkfE",
    authDomain: "contactform-4e4bb.firebaseapp.com",
    databaseURL: "https://contactform-4e4bb-default-rtdb.firebaseio.com",
    projectId: "contactform-4e4bb",
    storageBucket: "contactform-4e4bb.appspot.com",
    messagingSenderId: "720010558004",
    appId: "1:720010558004:web:eeece68921e98001146861"
  };

  firebase.initializeApp(firebaseConfig);

  var contactformDB = firebase.database().ref('contactform')

  document.getElementById('contactform').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault(); 
    
    var name = getElementByVal("name");
    var email = getElementByVal("email");
    var mobile = getElementByVal("mobile");
    var people = getElementByVal("people");

    console.log(name, email, mobile, people);
  }

  const getElementByVal = (id) =>{
        return document.getElementById(id).value;
  };