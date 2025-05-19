import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from '../Exer5/AddCatForm';

//Adding images for Exer2
const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Male_cheetah_facing_left_in_South_Africa.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrNGBPwQQyoqEiRKdnPbvGqehiOEFiqM17Q&s' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeET9hUEMB-8-cf2YEGh43E2WSLMXxc_V2nQ&s' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQum62NWJbpa3uqr6ozh7yZxE_sM2prsZCsVg&s' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg' },
];

//Extension code for Exer4 
const BigCats = () => {
  const [catList, setCatList] = useState(cats);

 //code to sort alphabetically for Exer4
  const sortAlphabetically = () => {
    const sorted = [...catList].sort((a, b) => a.name.localeCompare(b.name));
    setCatList(sorted);
  };

  //code to make reverse list for Exer4
  const reverseList = () => {
    const reversed = [...catList].reverse();
    setCatList(reversed);
  };

  //code to show Panthera only for Exer4
  const filterPanthera = () => {
    const filtered = cats.filter(cat => cat.latinName.startsWith('Panthera'));
    setCatList(filtered);
  };

  //code to reset for Exer4
  const resetList = () => {
    setCatList(cats);
  };

  //code to AddCat for Exer5
  const handleAddCat = (newCat) => {
    setCatList([newCat, ...catList]);
  };

  //code to DeleteCat for Exer5
  const handleDeleteCat = (id) => {
    const updatedList = catList.filter(cat => cat.id !== id);
    setCatList(updatedList);
  };

  //I add the buttons for Exer4 requirements
  return (
    <div className="space-y-4">
        <AddCatForm onAddCat={handleAddCat} />

      <div className="flex space-x-2 mb-4">
        <button onClick={sortAlphabetically} className="bg-blue-500 text-white px-4 py-2 rounded">Sort A-Z</button>
        <button onClick={reverseList} className="bg-blue-500 text-white px-4 py-2 rounded">Reverse</button>
        <button onClick={filterPanthera} className="bg-blue-500 text-white px-4 py-2 rounded">Show Panthera</button>
        <button onClick={resetList} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>

      <ul className="space-y-4">
        {catList.map((cat) => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onDelete={handleDeleteCat}
          />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
