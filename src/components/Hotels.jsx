/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState,useEffect } from "react";
import '../assets/styles/Places.css'

export default function Hotels() {

//Recuperer la liste des hotels depuis l'API HOTELS
    const [hotels, setListHotels] = useState([]);

    useEffect(() => {
    axios.get('https://sghiouri-mohammed.github.io/Doha-API/hotels-API.json')
    .then( res => {
        setListHotels(res.data.hotels)
    } )
    },[])
  

  return (
    <div className='hotels'>
        <div id='hotels'  className='w-4/5 m-auto mt-2'>

    <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5'>
        <h1 id='places' className='text-4xl font-bold'>Hotels</h1>
        <p  className='text-lg mb-5'>Find hotels in Qatar, their price, location and more information!</p>
      </div>
        <section className='gridd  gap-10 my-10 justify-items-center items-center'>
        {
          hotels.map(post => 
            <div className='drop-shadow-2xl grid-item text-left rounded space-y-2 bg-white '>
              <div className='row-span-1 col-span-1'>
                <figure>
                  <img className=' hotel-img rounded-md'  width="300" height="200" src={post.image}/>
                </figure>
              </div>
              <div className='p-3 space-y-4'>
                <div className='flex text-center'>
                <b> <p className='text-md text-black text-center'>{post.name}</p></b>
                </div>

                <div className='flex justify-between'>
                  <p className='text-md text-black-400'> Prices: <b>{post.price}</b></p>
                </div>

                <div className='flex justify-between'>
                  <p className='text-md text-black-400'> Phone: <b>{post.phone}</b></p>
                </div>

                <div className='flex justify-between'>
                <b><a href={post.location} target="_blank" className='text-decoration-none text-black'> Location</a></b>
                </div>

                <div className='flex justify-between'>
                  <a href={post.link} target="_blank"> 
                    <button className='bouton ' >
                      Hotel's website
                    </button>
                  </a> 
                </div>
              </div>
          </div>
          )
        }

        </section>
      </div>
      </div>
  )
}