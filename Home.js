document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".button");

    loginButton.addEventListener("mouseover", function() {
        loginButton.classList.add("circular");
    });

    loginButton.addEventListener("mouseout", function() {
        loginButton.classList.remove("circular");
    });
});

function searchProjects() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    let title = card.querySelector('h3').innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('category').addEventListener('change', function() {
  let category = this.value;
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
