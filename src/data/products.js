// Centralized product data for search functionality
export const allProducts = [
  // Textiles Products
  { id: 1, name: 'Banarasi Silk Saree', category: 'Textiles', subCategory: 'Sarees', price: 250, material: 'Silk', image: '/images/Banarasi-saare.png', seller: 'Global Exports' },
  { id: 2, name: 'Bridal Lehenga', category: 'Textiles', subCategory: 'Lehenga', price: 350, material: 'cotton', image: '/images/0.png', seller: 'Global Exports' },
  { id: 3, name: 'Party Saree', category: 'Textiles', subCategory: 'Saree', price: 85, material: 'silk', image: '/images/Party.png', seller: 'Global Exports' },
  { id: 4, name: 'Pashmina Shawl', category: 'Textiles', subCategory: 'Shawls', price: 180, material: 'Pashmina Wool', image: '/images/Pashmina-Shawl.png', seller: 'Global Exports' },
  { id: 5, name: 'Textured Kurta Set', category: 'Textiles', subCategory: 'Kurta', price: 75, material: 'cotton', image: '/images/Kurta.png', seller: 'Global Exports' },
  { id: 6, name: 'Phulkari Dupatta', category: 'Textiles', subCategory: 'Dupattas', price: 95, material: 'Cotton', image: '/images/Phulkari-Dupatta.png', seller: 'Global Exports' },
  { id: 7, name: 'Painted Boho Pants', category: 'Textiles', subCategory: 'Pants', price: 40, material: 'Silk', image: '/images/Pants.png', seller: 'Global Exports' },
  { id: 9, name: 'Chanderi Cotton', category: 'Textiles', subCategory: 'Fabrics', price: 120, material: 'Cotton', image: '/images/Chanderi-Cotton-Fabric.png', seller: 'Global Exports' },
  { id: 11, name: 'Hand Block Scarf', category: 'Textiles', subCategory: 'Scarves', price: 45, material: 'Cotton', image: '/images/Hand-Block-Printed-Scarf.png', seller: 'Global Exports' },
  { id: 12, name: 'Rani Pink Mirror Kurti', category: 'Textiles', subCategory: 'Kurti', price: 160, material: 'Silk', image: '/images/Rani.png', seller: 'Global Exports' },
  
  // Jewellery Products
  { id: 101, name: 'Six Pack Ring', category: 'Jewellery', subCategory: 'Ring', price: 500, material: 'Gold', image: '/images/jewellery section/sixpackring.png', seller: 'Global Exports' },
  { id: 102, name: 'Valentina Earrings', category: 'Jewellery', subCategory: 'Earrings', price: 350, material: 'Platinum', image: '/images/jewellery section/925SilverValentinaEarrings.png', seller: 'Global Exports' },
  { id: 103, name: 'JEWELLERY', category: 'Jewellery', subCategory: 'Earrings', price: 185, material: 'Silver', image: '/images/jewellery section/VALLEYOFJEWELLERY.png', seller: 'Global Exports' },
  { id: 104, name: 'Korean Earrings', category: 'Jewellery', subCategory: 'Earrings', price: 400, material: 'Silver', image: '/images/jewellery section/DiamondPearlCurvedZirconKoreanEarrings.png', seller: 'Global Exports' },
  { id: 105, name: 'Diamond Necklace', category: 'Jewellery', subCategory: 'Necklace', price: 1000, material: 'Diamonds', image: '/images/jewellery section/DiamondNecklaceSets.png', seller: 'Global Exports' },
  { id: 106, name: 'Bridal Necklace Sets', category: 'Jewellery', subCategory: 'Necklace', price: 705, material: 'Gold', image: '/images/jewellery section/BeautifulantiqueBridalNecklaceSets.png', seller: 'Global Exports' },
  { id: 107, name: 'Silver Necklace', category: 'Jewellery', subCategory: 'Necklace', price: 490, material: 'Silver', image: '/images/jewellery section/SterlingSilverLadiesNecklace.png', seller: 'Global Exports' },
  { id: 109, name: 'Platinum Band', category: 'Jewellery', subCategory: 'HandBand', price: 520, material: 'Platinum', image: '/images/jewellery section/OrlandoPlatinumBand.png', seller: 'Global Exports' },
  { id: 111, name: 'Gold Ring', category: 'Jewellery', subCategory: 'Ring', price: 545, material: 'Gold', image: '/images/jewellery section/GoldRing.png', seller: 'Global Exports' },
  { id: 112, name: 'Earrings with Beads', category: 'Jewellery', subCategory: 'Earrings', price: 100, material: 'Gold', image: '/images/jewellery section/EarringswithBeadsforWomen.png', seller: 'Global Exports' },
  { id: 113, name: 'Gold Chain For Men', category: 'Jewellery', subCategory: 'Chain', price: 240, material: 'Gold', image: '/images/jewellery section/GoldChainForMen.png', seller: 'Global Exports' },
  { id: 114, name: 'Gold Polished Chain', category: 'Jewellery', subCategory: 'Chain', price: 100, material: 'Gold', image: '/images/jewellery section/PolishedByGold.png', seller: 'Global Exports' },
  
  // Additional products from HomePage
  { id: 201, name: 'Oxidized Anklet', category: 'Jewellery', subCategory: 'Anklet', price: 85, material: 'Silver', image: '/images/Oxidized-Anklet.png', seller: 'Global Exports' },
  { id: 202, name: 'Kundan Necklace Set', category: 'Jewellery', subCategory: 'Necklace', price: 320, material: 'Gold', image: '/images/kundan-necklace-set.png', seller: 'Global Exports' },
  { id: 203, name: 'Embroidered Clutch', category: 'Accessories', subCategory: 'Bags', price: 120, material: 'Fabric', image: '/images/EmbroideredClutch.png', seller: 'Global Exports' },
];

// Search function
export const searchProducts = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return [];
  }
  
  const term = searchTerm.toLowerCase().trim();
  
  return allProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.subCategory.toLowerCase().includes(term) ||
      product.material.toLowerCase().includes(term) ||
      product.seller.toLowerCase().includes(term)
    );
  });
};

// Get product by ID
export const getProductById = (id) => {
  return allProducts.find(product => product.id === parseInt(id));
};

// Get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};


