let userType = '';

function openModal(type, action) {
    userType = type;
    if (action === 'login') {
        document.getElementById('loginModal').style.display = 'block';
    } else if (action === 'signup') {
        document.getElementById('signupModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        // Store user details in localStorage for the sake of the example
        localStorage.setItem('user', JSON.stringify({ email, userType }));

        // Redirect based on user type
        if (userType === 'fundi') {
            window.location.href = '/Professional.html';
        } else if (userType === 'client') {
            window.location.href = '/client-dashboard.html';
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const fullName = document.getElementById('signupFullName').value;
    const location = document.getElementById('signupLocation').value;
    const age = document.getElementById('signupAge').value;
    const idNumber = document.getElementById('signupIdNumber').value;
    const password = document.getElementById('signupPassword').value;

    if (email && fullName && location && age && idNumber && password) {
        // Store user details in localStorage
        localStorage.setItem('user', JSON.stringify({ email, fullName, location, userType }));

        // Redirect based on user type
        if (userType === 'fundi') {
            window.location.href = '/Professional.html';
        } else if (userType === 'client') {
            window.location.href = '/client-dashboard.html';
        }
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to display user info on the professional dashboard
function displayUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('userName').textContent = user.fullName || '';
        document.getElementById('userEmail').textContent = user.email || '';
        document.getElementById('userLocation').textContent = user.location || '';
    }
}

// Call displayUserInfo when the page loads
document.addEventListener('DOMContentLoaded', displayUserInfo);
