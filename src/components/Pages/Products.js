import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCards/ProductCard';
import Loader from '../Loader';

const Products = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        const products = data.products;
        setData(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [setSortOption]);
  

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedData = [...data];

  if (sortOption === 'default'){

  } 
  else if (sortOption === 'price-low-to-high') {
    sortedData.sort((a, b) => a.price - b.price);
  } 
  else if (sortOption === 'price-high-to-low') {
    sortedData.sort((a, b) => b.price - a.price);
  } 
  else if (sortOption === 'title-a-to-z') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } 
  else if (sortOption === 'title-z-to-a') {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className='my-2 mx-2'>
      
      {/* Sorting dropdown */}
      <div className='my-2 mx-2'>
        <label htmlFor='sort'>Sort By:</label>
        <select id='sort' onChange={handleSortChange}>
          <option value='default'>Default</option>
          <option value='price-low-to-high'>Price: Low to High</option>
          <option value='price-high-to-low'>Price: High to Low</option>
          <option value='title-a-to-z'>Title: A to Z</option>
          <option value='title-z-to-a'>Title: Z to A</option>
        </select>
      </div>

      { loading && <Loader />
      }

      <div className='flex justify-evenly flex-wrap flex-row'>
        {sortedData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
