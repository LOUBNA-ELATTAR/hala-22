import Home from './components/Home'
import Nav from './components/Nav'
import Discover from './components/Discover'
import Footer from './components/Footer'
import WorldCup from './components/WorldCup'
import Translate from './components/Translater1'
import Weather from './components/Weather'
import Hotels from './components/Hotels'
import Restaurants from './components/Restaurants'
import Stadiums from './components/Stadiums'
import Metro from './components/Metro'
import Game from './components/Game'


function App() {
  
  let compoonent 
  switch (window.location.pathname){
    case "/":
      compoonent = <Home /> 
            break

    case "/discover":
      compoonent = <Discover />
      break

    case "/metro":
      compoonent = <Metro />
      break
    case "/translate":
      compoonent = <Translate />
      break

    case "/weather":
      compoonent = <Weather />
      break

      case "/hotels":
        compoonent = <Hotels />
        break

      case "/restaurants":
        compoonent = <Restaurants />
        break
      
      case "/stadiums":
        compoonent = <Stadiums />
        break

      case "/game":
        compoonent = <Game />
        break
        
      case "/worldcup":
        compoonent = <WorldCup />
        break           
        default:
          compoonent = <Home />
      
  }
  return (
    <div className="App">
     <Nav/>
      {compoonent}
      <Footer/>
    </div>
  );
}

export default App;
