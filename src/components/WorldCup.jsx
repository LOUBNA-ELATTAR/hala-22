/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState,useEffect } from "react";
import '../assets/styles/worldcup.css';

export default function WorldCup() {

  const [matches, setListMatches] = useState([]);

  useEffect(() => {
    axios.get('https://sghiouri-mohammed.github.io/Doha-API/matches-calendar.json')
    .then( res => {
      setListMatches(res.data.matches)
    } )
    },[])

  return (

    <div>
      <div id="header" class="bg-primary">
          <div id="header-background" >
              <div class="pt-5 ll cc">
                  <h1 className="hh">هلا22</h1>
              </div>
          </div>
      </div>
     
      <div class="d-flex justify-content-center title1">
          Calendar
      </div>
      <hr></hr>

      <div class="container mt-5">
        {
          matches.map(post => 
            <div class="match">
                <div class="match-header">
                    <div class="match-status">{post.Group}</div>
                    <div class="match-tournament">  {post.Location}</div>
                    <div class="match-actions">
                    </div>
                </div>
                
                <div class="match-content">
                    <div class="column">
                        <div class="team team--home">
                            <div class="team-logo">
                                <img className="imgo" src={post.flag[0]} />
                            </div>
                            <h2 class="team-name">{post.HomeTeam}</h2>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-date">
                                {post.DateUtc}
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team team--away">
                            <div class="team-logo">
                        
                                <img className="imgo" src={post.flag[1]} />
                            </div>
                            <h2 class="team-name">{post.AwayTeam}</h2>
                        </div>
                    </div>
                </div>
            </div>
          )
        }  
      </div>
    </div>

  );
}