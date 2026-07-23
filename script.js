document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (form) { 
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission (page reload)
            // Create Your Profile - Retreive the student's name from the input field
            const name = document.getElementById('name').value;
            // Create Your Profile -  Save the student's name to localStorage   
            localStorage.setItem('studentName', name);
            // Login to Learn - Redirect to the dashboard/home page
            window.location.href = "home.html";
        });
    }

    // Welcome to Learning Portal - Get the welcome heading element
    const welcome = document.getElementById('welcome');
    if (welcome) {
        //Welcome to Learning Portal - Fetch the stored name and display a personalized greeting
        welcome.textContent = 'Welcome, ' + localStorage.getItem('studentName') + '!';
    }
});