// login.js

function openModal(type) {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('loginForm').action = '/' + type + '/login';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        closeModal();
    }
}
