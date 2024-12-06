// Greeting based on the time of day
window.onload = function () {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  alert(greeting);
};

// Event listener for Read More button
document.getElementById('read-more').addEventListener('click', function() {
  const moreInfo = document.getElementById('more-info');
  // Toggle display property
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
      moreInfo.style.display = 'block'; // Show the additional info
  } else {
      moreInfo.style.display = 'none'; // Hide the additional info
  }
});

// Form validation
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("formError");

  if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
      error.style.display = "block";
  } else {
      error.style.display = "none";
      alert("Form submitted successfully!");
  }
});
