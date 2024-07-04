// Open login modal based on user type
function openModal(userType) {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';
    
    // Store userType in a hidden field or a global variable if needed
    document.getElementById('loginForm').dataset.userType = userType;
}

// Open signup modal
function openSignupModal() {
    const signupModal = document.getElementById('signupModal');
    signupModal.style.display = 'block';
}

// Close any modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}

// Handle login form submission
function redirectToProfessional() {
    const userType = document.getElementById('loginForm').dataset.userType;
    if (userType === 'fundi') {
        window.location.href = 'Professional.html';
    } else if (userType === 'client') {
        window.location.href = 'ClientDashboard.html';
    }
}

// Handle signup form submission
function redirectToClientDashboard() {
    const userType = document.getElementById('signupForm').dataset.userType;
    if (userType === 'fundi') {
        window.location.href = 'Professional.html';
    } else if (userType === 'client') {
        window.location.href = 'ClientDashboard.html';
    }
}
