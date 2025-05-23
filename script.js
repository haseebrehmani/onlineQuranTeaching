document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you for registering! We'll reach out soon.";
});
