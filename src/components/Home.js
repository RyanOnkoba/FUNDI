import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const searchProjects = () => {
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      let title = card.querySelector('h3').innerText.toLowerCase();
      let categoryValue = card.getAttribute('data-service').toLowerCase();

      if ((title.includes(searchInput) || searchInput === '') &&
          (category === 'all' || categoryValue.includes(category))) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" id="searchInput" placeholder="Search for services..." onChange={handleSearchInput} />
        <button onClick={searchProjects}>Search</button>
      </div>
      <div className="filters">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="balconies">Balconies</option>
          <option value="home-cleaning">Home Cleaning</option>
          <option value="roof-repair">Roof Repair</option>
          <option value="hedge-maintenance">Hedge Maintenance</option>
          <option value="appliance-repair">Appliance Repair</option>
          <option value="pest-control">Pest Control</option>
          <option value="gutter-services">Gutter Services</option>
          <option value="plumbing-services">Plumbing Services</option>
        </select>
      </div>

      <div className="grid">
        {/* Sample cards */}
        <div className="card balconies" data-service="balconies">
          <h3>Balconies</h3>
          <img src="https://example.com/balconies.jpg" alt="Balconies" />
          <div className="price">from $100</div>
          <div className="description">Description of balcony services.</div>
        </div>
        <div className="card home-cleaning" data-service="home-cleaning">
          <h3>Home Cleaning</h3>
          <img src="https://example.com/home-cleaning.jpg" alt="Home Cleaning" />
          <div className="price">from $50</div>
          <div className="description">Description of home cleaning services.</div>
        </div>
        <div className="card roof-repair" data-service="roof-repair">
          <h3>Roof Repair</h3>
          <img src="https://example.com/roof-repair.jpg" alt="Roof Repair" />
          <div className="price">from $200</div>
          <div className="description">Description of roof repair services.</div>
        </div>
        <div className="card hedge-maintenance" data-service="hedge-maintenance">
          <h3>Hedge Maintenance</h3>
          <img src="https://example.com/hedge-maintenance.jpg" alt="Hedge Maintenance" />
          <div className="price">from $80</div>
          <div className="description">Description of hedge maintenance services.</div>
        </div>
        <div className="card appliance-repair" data-service="appliance-repair">
          <h3>Appliance Repair</h3>
          <img src="https://example.com/appliance-repair.jpg" alt="Appliance Repair" />
          <div className="price">from $120</div>
          <div className="description">Description of appliance repair services.</div>
        </div>
        <div className="card pest-control" data-service="pest-control">
          <h3>Pest Control</h3>
          <img src="https://example.com/pest-control.jpg" alt="Pest Control" />
          <div className="price">from $70</div>
          <div className="description">Description of pest control services.</div>
        </div>
        <div className="card gutter-services" data-service="gutter-services">
          <h3>Gutter Services</h3>
          <img src="https://example.com/gutter-services.jpg" alt="Gutter Services" />
          <div className="price">from $150</div>
          <div className="description">Description of gutter services.</div>
        </div>
        <div className="card plumbing-services" data-service="plumbing-services">
          <h3>Plumbing Services</h3>
          <img src="https://example.com/plumbing-services.jpg" alt="Plumbing Services" />
          <div className="price">from $90</div>
          <div className="description">Description of plumbing services.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
