/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState,useEffect } from "react";
import '../assets/styles/Places.css'
import '../assets/styles/resto.css'
import $ from 'jquery' 


export default function Restaurants() {
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [phone, setPhone] = useState([]);
  const [name, setName] = useState([]);

  function addDescription(description,image,phone,name){
    setDescription(description)
    setImage(image)
    setPhone(phone)
    setName(name)
  }

  $(document).ready(function() {
    const $section = $('section'),
          $overlay = $('.overlay'),
          $showBtn = $('.show-modal'),
          $closeBtn = $('.close-btn');
  
    $showBtn.click(() => {
      $section.addClass('active');
    });
  
    $closeBtn.click(() => {
      $section.removeClass('active');
    });
    $overlay.click(() => {
      $section.removeClass('active');
    });
  });
  


//Recuperer la liste des hotels depuis l'API HOTELS
    //Recuperer la liste des Restaurannts depuis l'API RESTAURANTS
    const [Restaurant, setListRestaurant] = useState([]);

    useEffect(() => {
        axios.get('https://sghiouri-mohammed.github.io/Doha-API/restaurants-doha.json')
        .then( res => {
        setListRestaurant(res.data.restaurants)
        } )
    },[])
  

  return (

    <section className='hotels'>
    <br/>

        <div id='restaurants'  className=' text-center'>
        <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5'>
        <h1 id='places' className='text-4xl font-bold'>Restaurants</h1>
        <p  className='text-lg mb-5'>Discover restaurants in Qatar!</p>
      </div>
         

          <div className='grid-rest  gap-10 my-10 justify-items-center items-center'>
            {
              Restaurant.map(post => 
                <div className='drop-shadow-2xl grid-item text-left rounded space-y-2 bg-white '>
                  <div className='row-span-1 col-span-1'>
                    <figure>
                      <img className=' hotel-img rounded-md'  width="300" height="200" src={post.image}/>
                    </figure>
                  </div>
                  <div className='p-3 space-y-4'>
                    <div className='flex justify-between'>
                      <p className='text-lg text-black-400 bolder'>{post.name}</p>
                    </div>

                    <div className='flex justify-between'>
                      <p className='text-lg text-black-400'> Phone : <b>{post.phone}</b></p>
                    </div>
                    <div className='flex justify-between'>
                      <a href={post.link} target="_blank"> 
                        <button>
                          Restaurant's website
                        </button>
                      </a> 
                    </div>

                    <div className='flex justify-between'>
                      <button onClick={()=> addDescription(post.description, post.image,post.phone,post.name)} class="show-modal bouton">Show Description</button>
                    </div>

                  </div>
              </div>
              
              )
            }
          </div>
          
        </div>
        <span class="overlay"></span>
          <div class="modal-box">
            <h3> {name} </h3>
            <br/>
            <div className="display-flex">
              <img className="rounded-md" src={image} width={300} height={300} />
              <div>
              <br/>
                <p className="text-lg text-black-400"> {phone} </p>
              </div>

            </div>
            <br/>
            <br/>
            <p>{description}</p>
            <div class="buttons">
                <button class="close-btn">OK, Close</button>
            </div>
          </div>
      </section>
  )
}