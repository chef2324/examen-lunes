

const products = [
    {
      name: "HOOVER H-POWER Cylinder Vaccum Cleaner",
      price: 129.9,
      stars: 4,
      seller: "HbVacuum",
      image: "images/cylinder1.png",
    },
  {
      name: "HOOVER HENRY HVR160 Cylinder Vacuum Cleaner",
      price: 169.9,
      stars: 5,
      seller: "AtlanticCleaners",
      image: "images/cylinderhenry.png",
    },
    {
      name: "HOOVER NUMATIC HENRY PET 200 Cylinder Vaccum Cleaner",
      price: 179.9,
      stars: 3,
      seller: "VacuumExperts",
      image: "images/cylinderhenry1.png",
    },
    {
      name: "HOOVER Upright 300PET Vaccum Cleaner",
      price: 119.9,
      stars: 3,
      seller: "LGCleaners",
      image: "images/pet.png",
    },
    {
      name: "HOOVER H-POWER 300PET HP320PET Vaccum Cleaner",
      price: 114.9,
      stars: 4,
      seller: "HbVacuum",
      image: "images/pet1.png",
    },
    {
      name: "HOOVER Breeze Evo PETS TH31B002 Vaccum Cleaner",
      price: 89.9,
      stars: 4,
      seller: "AtlanticCleaners",
      image: "images/pet2.png",
    },
    {
      name: "HOOVER Shark Lift-Away NV612UKT Vaccum Cleaner",
      price: 289.9,
      stars: 5,
      seller: "VacuumExperts",
      image: "images/bagless1.png",
    },
    {
      name: "HOOVER BEL01731TT Upright Bagless Vaccum Cleaner",
      price: 54.9,
      stars: 3,
      seller: "LGCleaners",
      image: "images/bagless.png",
    },
    {
      name: "HOOVER Anti-Twist Cordless Vaccum Cleaner",
      price: 249.9,
      stars: 5,
      seller: "HbVacuum",
      image: "images/cordless.png",
    },
    {
      name: "HOOVER Anti-Twist HF410H Cordless Vaccum Cleaner",
      price: 229.9,
      stars: 4,
      seller: "AtlanticCleaners",
      image: "images/cordless1.png",
    },
  ];
  
  
  // PRODUCT CARDS
  const startItems = (name, image, stars, seller, price) => {
    return `<div class="product-card">
    <h3>${name}</h3>
    <div class="product-image">
     <img src=${image} alt=""/>
    <div>${stars} stars</div>
    <div>${seller} reviews</div>
    <p class="price">${price}</p>
    <div class="product-card-footer">
     <button>Buy Now!</button>
     </div>
    </div> `;
    
  };
  
  // SELLER FILTER
  let listProducts = document.getElementById("constructCards");
  let sellerName = document.getElementById('SellerName');
  
  const productsContainer = (filteredSeller) => {
    // Clear existing product cards
    listProducts.innerHTML = '';
     
    for (let i = 0; i < products.length; i++) {
      const currentProducts = products[i];
        
      if (!filteredSeller || currentProducts.seller === filteredSeller) {
        listProducts.innerHTML += startItems(
          currentProducts.name,
          currentProducts.image,
          currentProducts.stars,
          currentProducts.seller,
          currentProducts.price
        );
      }
    }
  };
  // Event listener for seller selection change
  sellerName.addEventListener('change', () => {
    const selectedSeller = sellerName.value;
    productsContainer(selectedSeller);
    
    sellerName.value = '';
    sellerName.focus();
  });
  
  
  // PRICE FILTER
  let listPrices = document.getElementById('listprices');
  let filterPriceButton = document.getElementById('clearfilters');
    
  // Add an event listener to the filter button
  filterPriceButton.addEventListener('click', () => {
    const selectPrice = parseFloat(listPrices.value);
  
    
    // Clear existing product cards
    listProducts.innerHTML = '';
  
    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i];
      
      if (isNaN(selectPrice) || currentProduct.price <= selectPrice) {
        listProducts.innerHTML += startItems(
          currentProduct.name,
          currentProduct.image,
          currentProduct.stars,
          currentProduct.seller,
          currentProduct.price
        );
      }
    }
  });
  