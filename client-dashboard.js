document.addEventListener("DOMContentLoaded", function() {
    // Retrieve client information from local storage (replace with actual backend integration)
    const clientName = localStorage.getItem("clientName") || "Client Name";
    const clientPhone = localStorage.getItem("clientPhone") || "Not provided";
    const clientEmail = localStorage.getItem("clientEmail") || "Not provided";
    const clientLocation = localStorage.getItem("clientLocation") || "Not provided";

    // Update DOM elements with retrieved client information
    document.getElementById("clientName").textContent = clientName;
    document.getElementById("clientPhone").textContent = `Phone Number: ${clientPhone}`;
    document.getElementById("clientEmail").textContent = `Email: ${clientEmail}`;
    document.getElementById("clientLocation").textContent = `Location: ${clientLocation}`;
});
