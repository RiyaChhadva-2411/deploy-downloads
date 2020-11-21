import React from 'react';
import { Container,  Row, Col,Button } from 'reactstrap'; // All the components of reactstrap
import "./Download.css"; // importing css stylesheet to access various different styles

{/* Functional Component called Card */}
function Card(props){  // using react properties called props which passes different attributes like name, title, description, dName
    return(
        <div>
        <Container>
          
            <div className="main">
              <Row >
                <Col sm={4}className="left-side">
                  <img src={props.name} alt="image1"/>
                </Col>
                <Col sm={8} className="right-side">
                  <div>
                   <h4 className="title">{props.title}</h4>
                  <br />
                   <p className="description">{props.description}</p>
                  </div>
                  <button  class="btn btn-light"> <i class="fa fa-download"><a href={props.name} download={props.dName} target="_blank">Download</a></i></button>
                </Col>
              </Row>
              <hr className="line" />
              </div>
              </Container>
            </div>
    )
}
export default Card;