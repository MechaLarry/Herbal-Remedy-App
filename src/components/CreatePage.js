import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePage.css'; // Ensure you have a CSS file for styling

function CreatePage() {
  const [name, setName] = useState('');
  const [advantages, setAdvantages] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHerb = {
      name,
      advantages: advantages.split(',').map(adv => adv.trim()),
      image,
    };

    axios.post('http://localhost:3002/herbs', newHerb)
      .then(() => {
        navigate('/products');
      })
      .catch(error => console.error('Error creating herb:', error));
  };

  return (
    <div className="create-page">
      <h1>Create New Herb</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Advantages (comma-separated):</label>
          <input
            type="text"
            value={advantages}
            onChange={(e) => setAdvantages(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
}

export default CreatePage;
