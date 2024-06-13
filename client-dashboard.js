document.addEventListener("DOMContentLoaded", function() {
    // Retrieve client information from local storage (replace with actual backend integration)
    const clientName = localStorage.getItem("clientName") || "RURIGI MAINA";
    const clientPhone = localStorage.getItem("clientPhone") || "0110093293";
    const clientEmail = localStorage.getItem("clientEmail") || "rurigi.kariuki@starthmore.edu";
    const clientLocation = localStorage.getItem("clientLocation") || "Nairobi";

    // Update DOM elements with retrieved client information
    document.getElementById("clientName").textContent = clientName;
    document.getElementById("clientPhone").textContent = `Phone Number: ${clientPhone}`;
    document.getElementById("clientEmail").textContent = `Email: ${clientEmail}`;
    document.getElementById("clientLocation").textContent = `Location: ${clientLocation}`;
});
