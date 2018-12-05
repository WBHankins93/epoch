import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './Footer.css';

class FooterPage extends React.Component {
render() {
return (
  <div>
<Footer style={{border:'4px solid black'}} className="font-small pt-4 mt-4">



  <div className="ui grid size wholeFoot">
  <div className="four wide column logoFoot">
    <img className="footerLogo" src="./images/EpochLogo_1.png"></img><br/>
    <p>
      Your time is now.
    </p>
  </div>
  <div className="four wide column">
    <p><a href="#">Blog</a></p>
    <p><a href="#">Careers</a></p>
    <p><a href="#">Join Us!</a></p>
  </div>
  <div className="four wide column">
    <h3>Customer Care</h3>
    <p>Order Status</p>
    <p>FAQs</p>
    <p>Warranty</p>

  </div>
  <div className="four wide column">
    <h3>Contact Us</h3>
    <p>Email: <a href="mailto:epoch@epochsales.com"  target="_blank" className="email-link">epoch@epochsales.com</a></p>
    <p>512-555-5555</p>

  </div>
</div>
</Footer>
</div>
);
}
}


export default FooterPage;
