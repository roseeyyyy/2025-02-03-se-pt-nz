import React from 'react';

const SingleCat = ({ name, latinName, image }) => {
  return (
    <li className="flex items-center space-x-4 bg-white p-4 rounded shadow">
      <img
        src={image}
        alt={name}
        className="cat-image"
      />

      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600 italic">{latinName}</p>
      </div>

      <button onClick={() => onDelete(id)} className="text-red-500 hover:underline"> Delete
      </button>
    </li>
  );
};

export default SingleCat;
