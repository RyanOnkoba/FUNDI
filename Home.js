document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".button");

  loginButton.addEventListener("mouseover", function() {
      loginButton.classList.add("circular");
  });

  loginButton.addEventListener("mouseout", function() {
      loginButton.classList.remove("circular");
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
      card.addEventListener("click", function() {
          const service = card.getAttribute("data-service");
          fetchProfessionals(service);
      });
  });

  function fetchProfessionals(service) {
      // Simulated fetching data
      const professionals = getProfessionalsData(service);

      const professionalsContainer = document.getElementById("professionals");
      professionalsContainer.innerHTML = '';

      professionals.forEach(prof => {
          const professionalCard = document.createElement("div");
          professionalCard.classList.add("professional-card");

          professionalCard.innerHTML = `
              <img src="${prof.image}" alt="${prof.name}">
              <h3>${prof.name}</h3>
              <div class="description">${prof.description}</div>
          `;
          professionalsContainer.appendChild(professionalCard);
      });
  }

  function getProfessionalsData(service) {
      // Simulate data based on the service
      const professionalsData = {
          'home-cleaning': [
              { name: 'Alice Johnson', image: 'https://via.placeholder.com/150', description: 'Expert in deep cleaning and home organization.' },
              { name: 'John Smith', image: 'https://via.placeholder.com/150', description: 'Experienced in residential cleaning and maintenance.' }
          ],
          'roof-repair': [
              { name: 'Robert Brown', image: 'https://via.placeholder.com/150', description: 'Specialist in roof repair and installation.' },
              { name: 'Emma Davis', image: 'https://via.placeholder.com/150', description: 'Professional in fixing leaks and roof inspections.' }
          ],
          'hedge-maintenance': [
              { name: 'Oliver Wilson', image: 'https://via.placeholder.com/150', description: 'Skilled in hedge trimming and garden maintenance.' },
              { name: 'Sophia Martinez', image: 'https://via.placeholder.com/150', description: 'Expert in landscaping and hedge care.' }
          ]
          // Add more services and professionals as needed
      };

      return professionalsData[service] || [];
  }
});

function searchProjects() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
      const serviceName = card.querySelector("h3").innerText.toLowerCase();
      if (serviceName.includes(searchInput)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}
