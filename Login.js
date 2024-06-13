function openModal(type) {
    document.getElementById('loginModal').style.display = 'block';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}

function redirectToProfessional() {
    window.location.href = './Professional.html';
}

function redirectToClientDashboard() {
    window.location.href = './client-dashboard.html';
}
