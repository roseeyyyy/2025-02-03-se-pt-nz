const portfolioItems = [
    {
      title: "Portrait",
      description: "A stunning Van Gogh portrait.",
      image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
    },
    {
      title: "Sky",
      description: "Swirling skies and dreamy tones.",
      image: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
    },
    {
      title: "Sunflowers",
      description: "Classic still life with vibrant sunflowers.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vincent_Willem_van_Gogh_128.jpg/800px-Vincent_Willem_van_Gogh_128.jpg"
    },
    {
      title: "The Starry Night",
      description: "Van Gogh's masterpiece.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/The_Starry_Night.jpg/800px-The_Starry_Night.jpg"
    }
  ];
  
  const cardRow = document.getElementById("card-row");
  
  portfolioItems.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";
  
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    `;
  
    cardRow.appendChild(col);
  });
  