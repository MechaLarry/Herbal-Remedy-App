import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductsPage.css';
import productImage from '../assets/product.jpg';

function ProductsPage() {
  const [herbs, setHerbs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch herbs data from db.json
    axios.get('http://localhost:3002/herbs')
      .then(response => setHerbs(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (id) => {
    const herbToEdit = herbs.find(herb => herb.id === id);
    const newName = prompt('Enter new herb name:', herbToEdit.name);
    const newAdvantages = prompt('Enter new advantages (comma-separated):', herbToEdit.advantages.join(', '));

    if (newName && newAdvantages) {
      const updatedHerb = {
        ...herbToEdit,
        name: newName,
        advantages: newAdvantages.split(',').map(adv => adv.trim()),
      };

      axios.put(`http://localhost:3002/herbs/${id}`, updatedHerb)
        .then(response => {
          setHerbs(herbs.map(herb => herb.id === id ? response.data : herb));
        })
        .catch(error => console.error('Error updating herb:', error));
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this herb?');

    if (confirmDelete) {
      axios.delete(`http://localhost:3002/herbs/${id}`)
        .then(() => {
          setHerbs(herbs.filter(herb => herb.id !== id));
        })
        .catch(error => console.error('Error deleting herb:', error));
    }
  };

  const handleCreate = () => {
    navigate('/create');
  };

  return (
    <div className="products-page">
      <button onClick={handleCreate} className="create-button">Create New Herb</button>
      {herbs.map((herb) => (
        <div key={herb.id} className="herb-card">
          <img src={productImage} alt={herb.name} className="herb-image" />
          <div className="herb-info">
            <h2>{herb.name}</h2>
            <ul>
              {herb.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
            <div className="herb-actions">
              <button onClick={() => handleEdit(herb.id)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(herb.id)} className="delete-button">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
