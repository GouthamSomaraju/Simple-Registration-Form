import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [hobbies, setHobbies] = useState(['']);

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  const addHobby = () => {
    setHobbies([...hobbies, '']);
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nHobbies: ${hobbies.filter(h => h).join(', ')}`);
    // You can also send this data to a backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Hobbies:</label><br />
        {hobbies.map((hobby, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '5px' }}>
            <input
              type="text"
              value={hobby}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
              placeholder="Enter a hobby"
              required
            />
            {hobbies.length > 1 && (
              <button type="button" onClick={() => removeHobby(index)} style={{ marginLeft: '5px' }}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addHobby}>
          Add Another Hobby
        </button>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

