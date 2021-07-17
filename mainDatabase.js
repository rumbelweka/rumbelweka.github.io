
				// Your web app's Firebase configuration
				// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
					apiKey: "AIzaSyD3iN0qeORQpg87juyZt6sZDesPd8sO7XA",
					authDomain: "web-scheduled.firebaseapp.com",
					projectId: "web-scheduled",
					storageBucket: "web-scheduled.appspot.com",
					messagingSenderId: "116449923756",
					appId: "1:116449923756:web:6af8fce259ac33a433c509",
					measurementId: "G-L8FYZM22X1"
				};
				// Initialize Firebase
				firebase.initializeApp(firebaseConfig);
				firebase.analytics();

// Reference messages collection
const database = firebase.database();

const id = document.getElementById("id");
const datetime = document.getElementById("currentDate");
const student = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const category = document.getElementById("demo-category");

const submit = document.getElementById("submit");

submit.addEventListener('click',(e) => {
	e.preventDefault();
	database.ref('/users/'+id.value).set({
  date_time: currentDate.value,
  student_name: student.value,
  email_student: email.value,
  phone_student: phone.value,
  category_student: category.value
	});
});
