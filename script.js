// Dynamic Greeting
const greetingText = document.getElementById("greetingText");
const hour = new Date().getHours();

if (hour < 12) {
  greetingText.textContent = "Good Morning!!Guyss";
} else if (hour < 18) {
  greetingText.textContent = "Good Afternoon!!Guyss";
} else {
  greetingText.textContent = "Good Evening!!Guyss";
}

// Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    message.textContent = "Please fill all required fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    form.reset();
  }
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
