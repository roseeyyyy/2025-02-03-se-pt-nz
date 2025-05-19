import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !latinName || !image) {
      alert('Please fill out all fields.');
      return;
    }
    const newCat = {
      id: Date.now(), 
      name,
      latinName,
      image
    };
    onAddCat(newCat);
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow mb-8">
      <h2 className="text-xl font-bold">Add a New Big Cat</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded"/>
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
        className="w-full border px-3 py-2 rounded"/>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border px-3 py-2 rounded"/>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Cat
      </button>
    </form>
  );
};

export default AddCatForm;
