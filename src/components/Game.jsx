import {React} from 'react';
import $ from 'jquery'
import GameCss from '../assets/GameCss.css';
import Foot from '../images/football.png'
import Goal from '../images/goalKeeper1.png'
import goall from '../images/goal.jpg'

export default function Game(){
    var count=0,
    g1=0;

    function goalKeeper(){

        var b=document.getElementById('b2');
        var g=Math.floor(Math.random()*7);
        g1=g;
        if(g==1)
            b.style.animation="gl0 1s";
        else if(g==2)
            b.style.animation="gl1 1s";
        else if(g==3)
            b.style.animation="gl2 1s";
        else if(g==4)
            b.style.animation="gc1 1s";
        else if(g==5)
            b.style.animation="gr0 1s";
        else if(g==6)
            b.style.animation="gr1 1s";
        else if(g==7)
            b.style.animation="gr2 1s";

    }

    function goal()
    {
        document.getElementById('GoalDone1').html("Oups");
        document.getElementById('GoalDone2').html("Oups");
        var o = Math.floor(Math.random()*5);
        if(o==1)
            document.getElementById("b1").style.animation = "Outside1 1s";
        else if (o==2)
            document.getElementById("b1").style.animation = "Outside2 1s";
        else if (o==3)
            document.getElementById("b1").style.animation = "Outside3 1s";
        else if (o==4)
            document.getElementById("b1").style.animation = "Outside4 1s";
        else if (o==5)
            document.getElementById("b1").style.animation = "Outside5 1s";
    }


    function leftTop()
    {
        document.getElementById('b1').style.animation="left0 1s";

        goalKeeper();

        if (g1!=1)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!";
            document.getElementById('GoalDone2').textContent="Goal!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!";
            document.getElementById('SavedDone2').textContent="Saved!";
        }
    }

    function rightTop()
    {
        document.getElementById('b1').style.animation="right0 1s";

        goalKeeper();

        if (g1!=5)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!";
            document.getElementById('GoalDone2').textContent="Goal!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!";
            document.getElementById('SavedDone2').textContent="Saved!";
        }
    }

    function centerTop()
    {
        document.getElementById('b1').style.animation="center0 1s";

        goalKeeper();

        if (g1!=4)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!";
            document.getElementById('GoalDone2').textContent="Goal!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!";
            document.getElementById('SavedDone2').textContent="Saved!";
        }
    }

    function leftMiddle()
    {
        document.getElementById('b1').style.animation="left2 1s";

        goalKeeper();

        if (g1!=2)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!";
            document.getElementById('GoalDone2').textContent="Goal!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!";
            document.getElementById('SavedDone2').textContent="Saved!";
        }
    }

    function rightMiddle()
    {
        document.getElementById('b1').style.animation="right2 1s";

        goalKeeper();

        if (g1!=6)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!!!";
            document.getElementById('GoalDone2').textContent="Goal!!!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!!!";
            document.getElementById('SavedDone2').textContent="Saved!!!";
        }
    }

    function centerMiddle()
    {
        document.getElementById('b1').style.animation="center2 1s";

        goalKeeper();

        if (g1!=4)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!!!";
            document.getElementById('GoalDone2').textContent="Goal!!!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!!!";
            document.getElementById('SavedDone2').textContent="Saved!!!";
        }
    }

    function leftBottom()
    {
        document.getElementById('b1').style.animation="left1 1s";

        goalKeeper();

        if (g1!=3)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!!!";
            document.getElementById('GoalDone2').textContent="Goal!!!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!!!";
            document.getElementById('SavedDone2').textContent="Saved!!!";
        }
    }

    function rightBottom()
    {
        document.getElementById('b1').style.animation="right1 1s";
        goalKeeper();
        if (g1!=7)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!!!";
            document.getElementById('GoalDone2').textContent="Goal!!!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!!!";
            document.getElementById('SavedDone2').textContent="Saved!!!";
        }
    }

    function centerBottom()
    {
        document.getElementById('b1').style.animation="center1 1s";

        goalKeeper();

        if (g1!=4)
        {
            count++; 
            $('#score').html(count);
            document.getElementById('GoalDone1').textContent="Goal!!!";
            document.getElementById('GoalDone2').textContent="Goal!!!";
        }
        else{
            document.getElementById('GoalDone1').textContent="Saved!!!";
            document.getElementById('SavedDone2').textContent="Saved!!!";
        }
    }


    return (
        <div>
            <img className='ground' src="https://us.123rf.com/450wm/sarawuth702/sarawuth7021604/sarawuth702160400005/55087377-soccer-goal.jpg?ver=6" />
            <img src={Goal} class="i2" id="b2" />
            <button id='b1' className='ball' onClick={()=>goal()} ><img className='i1' src={Foot} ></img></button>

            <div className='controlgoal'>
            <button className='control' onClick={()=>leftTop()} >Left-Top</button>
            <button className='control ' onClick={()=>centerTop()}>Center-Top</button>
            <button className='control ' onClick={()=>rightTop()}>Right Top</button><br/>
            <button className='control ' onClick={()=>leftMiddle()}>Left-Middle</button>
            <button className='control ' onClick={()=>centerMiddle()}>Center-Middle</button>
            <button className='control ' onClick={()=>rightMiddle()}>Right Midddle</button><br/>
            <button className='control ' onClick={()=>leftBottom()}>Left-Bottom</button>
            <button className='control ' onClick={()=>centerBottom}>Center Bottom</button>
            <button className='control ' onClick={()=>rightBottom()}>Right-Bottom</button><br/>

            <h1>Attempts: <span id='score'>0</span></h1>
            </div>

            <div className='right'>
                <h1 id='GoalDone1'></h1>
            </div>

            <div className='left'>
                <h1 id='GoalDone2'></h1>    
            </div>

        </div>
    )
}