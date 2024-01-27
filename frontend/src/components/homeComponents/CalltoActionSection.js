import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <div className="subscribe-cont">
              <h2>Want to be updated to our new products?</h2>
              <p>Sign up for free and get the latest updates.</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="Send" name="subscribe" type="submit" />
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
