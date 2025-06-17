import Navbar from '../Navbar/Navbar.jsx'
import Start from '../Home image/Start.jsx'
import Intro from '../Intro/Introduction.jsx';
import Sources from '../Sources/sources.jsx';
import Board from '../mother board/Board.jsx';
import Footer from '../footer/Footer.jsx';

function Landing(){
  return(
    <>
    <div className="navBar">
    <Navbar/>
    </div> 

    <div className="home">
      <Start/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="introduction">
      <Intro/>
      </div>

      <div className="source">
        <Sources/>
      </div>

      <div className="mother-board">
        <Board/>
      </div>

      <div className="ftr">
        <Footer/>
      </div>

    </>
  )
}
export default Landing;