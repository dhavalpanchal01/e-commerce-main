import React, { useEffect, useState } from 'react';
import Poster from '../ProductCards/Poster';
import FeaturedProductCard from '../ProductCards/FeaturedProductCard';
import NewArrivalProductCard from '../ProductCards/NewArrivalProductCard';
import Loader from '../Loader';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [arrivalProducts, setArrivalProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch('https://fakestoreapi.com/products')
        if(!response.ok){
          throw new Error('try again later!');
        }
        const data = await response.json();
        const featured = data.slice(0,10);
        const arrival = data.slice(10,20);
        setFeaturedProducts(featured)
        setArrivalProducts(arrival);
        setLoading(false);
      }
      catch(error){
        console.log("Something Error", error);
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className='my-2'>
      {/* poster */}

      {
        loading && <Loader />
      }

      <div>
        <Poster />
      </div>

      {/* featured products */}
      <div>
        <h1 className='text-2xl mx-5 font-bold text-left mt-5 mb-5 text-green-600'>Featured Products</h1>
        <div className='my-2 flex flex-wrap justify-evenly'>
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* New Arrivals card */}
      <div className='mt-20'>
        <h1 className='text-2xl mx-5 font-bold text-left mt-5 mb-5 text-red-600'>New Arrivals</h1>
        <div className='my-2 flex flex-wrap justify-evenly'>
          {arrivalProducts.map((product) => (
            <NewArrivalProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
