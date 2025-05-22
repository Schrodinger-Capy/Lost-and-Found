function updateGreeting() {
  const greeting = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();
  let message;
  if (hour >6 && hour < 12) {
    message = "Good Morning 🌄";
  } else if (hour >=12 && hour < 17) {
    message = "Good Afternoon ☀️";
  } else if(hour >=17 && hour<19){
    message = "Good Evening 🌇";
  }
  else{
    message = "Good Night🌃"
  }

  greeting.textContent = message;
}
function updateDate() {
  const dateDiv = document.getElementById("date");
  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDiv.textContent = now.toLocaleDateString(undefined, options);
}
updateGreeting();
updateDate();