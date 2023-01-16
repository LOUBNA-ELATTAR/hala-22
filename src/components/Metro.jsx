import axios from "axios";
import { useState,useEffect } from "react";
import '../assets/styles/style.css';
import doha from './Doha-Metro-route-map.png'; 

export default function Metro(){
    const [metro, setListMetro] = useState([]);
    
    useEffect(() => {
        axios.get('https://loubna-elattar.github.io/metro/metro.json')
        .then( res => {
          setListMetro(res.data.metro)
        } )
        },[])
    
    return(
    <div className='menu'>
        <div className='heading'>
            <h1>QATAR</h1>
            <h3>&mdash; Doha Metro current route &mdash;  </h3>
            <figure>
                  <img style={{ width: '60%', height: 'auto'}}  src={doha}/>
            </figure>
            <h3>&mdash; Metro Stations &mdash; </h3>
        </div>   
    {
        metro.map (post => 
            <div className='food-items'>
                <figure>
                  <img className="waqif"  src={post.image}/>
                </figure>
                <div className='details'>
                    <div className='details-sub'>
                        <h5>{post.Station}</h5>
                        <h5 className='price'> {post.Line} </h5>
                    </div>
                    <p> 
                        <span >Bus :   
                        
                        { post.Bus[0]} || {post.Bus[1]} || {post.Bus[2]}
                    </span></p>
                    
                        <button >
                        <a href={post.Itineraire} target="_blank"  className='text-decoration-none link-light'> 
                        Itinerary
                        </a>
                        </button>
                    
                </div>
            </div>
    
            )
        } 
    </div>     
    )
}
