import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="bg-dark text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row mt-4">
          {/* Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">See other options</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Tutorials</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Brew Masters</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Execution of the contract</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Business Location</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">BrewMaster</a>
                </li>
                <li>
                  <a href="#!" className="text-white">123 Street</a>
                </li>
                <li>
                  <a href="#!" className="text-white">1750 Las Pinas City</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a feedback</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Write to us</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

         {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright
        <a className="text-white" href="#!"> BrewMaster</a>
      </div>
      {/* Copyright */}
    </footer>
   
    // End of .container
  );
};

export default Footer;
