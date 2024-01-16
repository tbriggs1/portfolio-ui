import React from "react";
import tom from '../images/tom.png';

const Homepage: React.FC = () => {
  return (
    <div className="container mt-5" style={{paddingBottom: '75px', paddingTop: '75px'}}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1>Hey! I'm Tom Briggs!</h1>
            <p>I've been working with companies to help automate, migrate, test, cloud environments</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={tom} alt="Tom Briggs" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
