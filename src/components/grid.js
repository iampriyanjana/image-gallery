import img1 from './images/pic1.jpg';
import img2 from './images/pic2.jpg';
import img3 from './images/pic3.jpg';
import img4 from './images/pic4.jpg';
import img5 from './images/pic5.jpg';
import img6 from './images/pic6.jpg';

function Grid(){
   return(
      <>
           <div className="container">
              <div className="box">
                <div className="image"><img src={img1} alt="kkk"/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

              <div className="box">
                <div className="image"><img src={img2} alt="iii"/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

              <div className="box">
                <div className="image"><img src={img3} alt="888"/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

              <div className="box">
                <div className="image"><img src={img4} alt="==="/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

              <div className="box">
                <div className="image"><img src={img5} alt=",,,"/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

              <div className="box">
                <div className="image"><img src={img6} alt="]]]"/></div>
                <h4>The evolution of design thinking:insights and perspectives</h4>
              </div>

           </div>
      </>
   );
}

export default Grid;