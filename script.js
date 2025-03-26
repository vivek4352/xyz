document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Field Validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const college = document.getElementById('college').value.trim();
  const year = document.getElementById('year').value;
  const attendance = document.getElementById('attendance').value;

  if (!name || !email || !phone || !college || !year || !attendance) {
    document.getElementById('responseMessage').innerText = 'All fields are required!';
    document.getElementById('responseMessage').style.color = 'red';
    return;
  }

  // Success Message
  document.getElementById('responseMessage').innerText = `Thank you for registering, ${name}!`;
  document.getElementById('responseMessage').style.color = 'green';

  // Simulate form reset
  document.getElementById('registrationForm').reset();
});
