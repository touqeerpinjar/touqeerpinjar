
        function validateForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return false;
            }
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';


            return false; 
        }
