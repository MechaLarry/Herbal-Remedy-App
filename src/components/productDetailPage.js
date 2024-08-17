import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailPage.css'; // Ensure you have a CSS file for styling

function DetailPage() {
  const [herb, setHerb] = useState(null);
  const { id } = useParams(); // Get the id from the URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    axios.get(`http://localhost:3002/herbs/${id}`)
      .then(response => {
        setHerb(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleEdit = () => {
    if (!herb) return;

    const newName = prompt('Enter new herb name:', herb.name);
    const newAdvantages = prompt('Enter new advantages (comma-separated):', herb.advantages.join(', '));

    if (newName && newAdvantages) {
      const updatedHerb = {
        ...herb,
        name: newName,
        advantages: newAdvantages.split(',').map(adv => adv.trim()), // Ensure advantages are trimmed
      };

      axios.put(`http://localhost:3002/herbs/${id}`, updatedHerb)
        .then(response => {
          setHerb(response.data); // Update the local state with the new data
        })
        .catch(error => console.error('Error updating herb:', error));
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this herb?');

    if (confirmDelete) {
      axios.delete(`http://localhost:3002/herbs/${id}`)
        .then(() => {
          navigate('/products'); // Redirect to the products page or handle successful delete
        })
        .catch(error => console.error('Error deleting herb:', error));
    }
  };

  if (!herb) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detail-page">
      <h1>{herb.name}</h1>
      <img src={herb.image} alt={herb.name} className="herb-image" />
      <ul>
        {herb.advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
      <div className="herb-actions">
        <button onClick={handleEdit} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default DetailPage;
