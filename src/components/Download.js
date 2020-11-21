import React from 'react';
import { Container,  Row, Col } from 'reactstrap';

/*Six images*/
import first from "../images/image1.jpg";
import second from "../images/image2.jpg";
import third from "../images/image3.jpg";
import fourth from "../images/image4.jpg";
import fifth from "../images/image5.jpg";
import sixth from "../images/image6.jpg";
import Card from "./Card.js";

{/* Functional Component named App */}
function Download(){
  return(
    <div>
           {/* component card which contains the actual structure of the code */}
           <Card 
             
              name={first}  // First image out of 6
              title="Title: Scenary 1" // Title of every image
              description="The natural features of a landscape considered in terms of their appearance, especially when picturesque." // description of every image
              dName="Scenary1.jpg" // name of the image in which the user wants to download it
           /> 
           <Card 
              name={second} 
              title="Title: Scenary 2"
              description="The natural features of a landscape considered in terms of their appearance, especially when picturesque."
              dName="Scenary2.jpg"
           />
           <Card 
            name={third} 
            title="Title: Scenary 3"
            description="The natural features of a landscape considered in terms of their appearance, especially when picturesque."
            dName="Scenary3.jpg"
           />
           <Card 
             name={fourth} 
             title="Title: Scenary 4"
             description="The natural features of a landscape considered in terms of their appearance, especially when picturesque."
             dName="Scenary4.jpg"
           />
           <Card 
             name={fifth} 
             title="Title: Scenary 5"
             description="The natural features of a landscape considered in terms of their appearance, especially when picturesque."
             dName="Scenary5.jpg"
           />
           <Card 
             name={sixth}
             description="The natural features of a landscape considered in terms of their appearance, especially when picturesque."
             dName="Scenary6.jpg"
           />
          </div>
  )
}
export default Download;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*<div>
    <Container>
      
        <div className="main">
          <Row >
            <Col sm={4}className="left-side">
              <img src="https://wallpaperaccess.com/full/247679.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div>
              <h4 className="title">Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={first} download="image1.jpg" target="_blank">Download</a></i></button>
            </Col>
          </Row>
          <hr className="line" />

          <Row>
            <Col sm={4} className="left-side">
              <img src="https://c4.wallpaperflare.com/wallpaper/662/618/496/natur-2560x1600-sceneries-wallpaper-preview.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div >
              <h4 className="title">Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={second} download="image2.jpg" target="_blank">Download</a></i></button>
            </Col>
          </Row>
          <hr className="line" />
          
          <Row>
            <Col sm={4} className="left-side">
              <img src="https://img.wallpapersafari.com/desktop/1280/1024/50/96/Rk9chi.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div>
              <h4 className="title">Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={third} download="image3.jpg" target="_blank">Download</a></i></button>
            </Col>
          </Row>
          <hr className="line" />
          
          <Row>
            <Col sm={4} className="left-side">
              <img src="https://www.freegreatpicture.com/files/28/22638-hd-scenery-wallpaper.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div>
              <h4 className="title" >Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={fourth} download="image4.jpg" target="_blank">Download</a></i></button>
            </Col>
          </Row>
          <hr className="line" />
          
          <Row>
            <Col sm={4} className="left-side">
              <img src="https://i.pinimg.com/originals/39/de/14/39de142e074aa1df94ab3823435820fd.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div>
              <h4 className="title">Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={fifth} download="image5.jpg" target="blank">Download</a></i>  </button>
            </Col>
          </Row>
          <hr className="line" />
          
          <Row>
            <Col sm={4} className="left-side">
              <img src="https://wallpapercave.com/wp/wp3211780.jpg" alt="image1"/>
            </Col>
            <Col sm={8} className="right-side">
              <div>
              <h4 className="title">Title: Scenary</h4>
              <br />
              <p className="description">The natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
              <button  class="btn btn-light"> <i class="fa fa-download"><a href={sixth} download="image6.jpg" target="_blank">Download</a></i></button>
            </Col>
          </Row>
          <hr className="line" />
          
        </div>
     
    </Container>
    </div>*/
 

