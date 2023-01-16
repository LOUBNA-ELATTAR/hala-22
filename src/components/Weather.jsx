/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState } from "react";
import Image6 from '../images/imgweather.png';
import '../assets/styles/weather.css';


export default function Weather() {


  const apiKey = "f3ef0d863669bc9b98d5cb6c343ef8ce"
  const [inputCity, setInputCity] = useState("qatar")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (

    <div className='mt-5'>
    <br/>

    <div id="weather" className="mt-5">
      <div className="container-fluid wetherBg col-md-5 text-center">
        <div className="d-grid gap-3  ">

          <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5'>
        <h1 id='places' className='text-4xl font-bold'>Weather</h1>
        <p  className='text-lg '>Doha, Lusail, Al Wakrah, Al Rayyan.. Stay updated on the weather in Qatar!</p>
        <img width={100} height={100} src={Image6} className="img-fluid imago pl-5"/>
      </div>
         
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput}/>
          <button className="bouton " type="button"
            onClick={handleSearch}
          >Search</button>
        </div>

        <br></br>
        
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center">

          <div className=" col-md-5 m-auto rounded wetherResultBox">

            <h5 className="weathorCity text">
              {data?.name}
            </h5>
            <h3 className="weathorTemp ">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h3>
            <img className="weathorIcon" width="100" height="100" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

          </div>
        </div>
      }
    </div>
    </div>

  );
}