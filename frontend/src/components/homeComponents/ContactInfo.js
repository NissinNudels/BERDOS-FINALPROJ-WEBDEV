import React from "react";

const ContactInfo = () => {
	return (
		<div className="contactInfo container">
			<div className="row">
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-phone-alt"></i>
						</div>
						<h5>Call Brew Masters</h5>
						<p>09 123 456 7891</p>
					</div>
				</div>
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-map-marker-alt"></i>
						</div>
						<h5>Marketplace</h5>
						<p>Las Pinas City</p>
					</div>
				</div>
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-envelope"></i>
						</div>
						<h5>Business Email</h5>
						<p>brewmasteremporium@email.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
