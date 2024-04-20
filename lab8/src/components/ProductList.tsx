import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import book1img from "../assets/servetowin.jpg";
import book2img from "../assets/arsenewenger.jpg";
import book3img from "../assets/godfather.jpg";
import book4img from "../assets/goldfinger.jpg";
import book5img from "../assets/gonewiththewind.jpg";
import book6img from "../assets/themanwiththgoldengun.jpg";
import book7img from "../assets/casinoroyale.jpg";
import book8img from "../assets/mesopotamia.jpg";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProductList() {
  const Navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  // Function to check if a day is a weekend
  const isWeekday = (date: { getDay: () => any }) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const isValidEmail = (email: string) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidCardholderName = (name: string) => {
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nameRegex.test(name);
  };
  const isValidCreditCard = (cardNumber: string) => {
    var cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(cardNumber);
  };
  const isValidExpiryDate = (expiryDate: string) => {
    var expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    return expiryDateRegex.test(expiryDate);
  };
  const isValidCVV = (cvv: string) => {
    var cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv);
  };

  const ValidateForm = () => {
    if (!isValidEmail(paymentDetails.email)) {
      alert("Invalid email address. Please enter a valid email.");
      return false;
    }
    if (!isValidCardholderName(paymentDetails.cardholderName)) {
      alert("Invalid cardholder name. Please enter a valid name.");
      return false;
    }
    if (!isValidCreditCard(paymentDetails.cardNumber)) {
      alert(
        "Invalid credit card number. Please enter a valid 16-digit number."
      );
      return false;
    }
    if (!isValidExpiryDate(paymentDetails.expiryDate)) {
      alert("Invalid expiry date. Please enter date in MM/YY format.");
      return false;
    }
    if (!isValidCVV(paymentDetails.cvv)) {
      alert("Invalid CVV. Please enter a valid 3-digit number.");
      return false;
    }
    alert("Form submitted!");
    return true;
  };

  const GoBack = () => {
    Navigate("/");
  };
  return (
    <div className="product-list" style={{ margin: "20px 80px" }}>
      <NavigationBar />
      <h2>Our book selections:</h2>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book1img} alt="Book 1" />
          <div className="card-body">
            <h3>Serve to Win</h3>
            <p className="card-text">
              In 2011, Novak Djokovic had what sportswriters called the greatest
              single season ever by a professional tennis player: He won ten
              titles, three Grand Slams, and forty-three consecutive matches.
            </p>
            <p>Author: N.Djokovic </p>
            <p>Price: $25</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book2img} alt="Book 2" />
          <div className="card-body">
            <h3>Arsène Wenger</h3>
            <p className="card-text">
              Wenger opens up about his life, sharing principles for success on
              and off the field with lessons on leadership, personal
              development, and management.
            </p>
            <p>Author: A.Wenger </p>
            <p>Price: $38</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book3img} alt="Book 3" />
          <div className="card-body">
            <h3>The Godfather</h3>
            <p className="card-text">
              The Godfather has gone on to become a part of America's national
              culture, as well as a trilogy of landmark motion pictures.
            </p>
            <p>Author: M.Puzo </p>
            <p>Price: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book4img} alt="Book 4" />
          <div className="card-body">
            <h3>Goldfinger</h3>
            <p className="card-text">
              Who is Auric Goldfinger? The Bank of England wants to know and
              they're also curious to find out what he's done with the huge
              stock of gold he's been collecting since the war. James Bond is
              put on the trail.
            </p>
            <p>Author: I.Fleming </p>
            <p>Price: $15</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book5img} alt="Book 5" />
          <div className="card-body">
            <h3>Gone With The Wind</h3>
            <p className="card-text">
              This is the tale of Scarlett O’Hara, the spoiled, manipulative
              daughter of a wealthy plantation owner. Winner of the Pulitzer
              Prize and one of the bestselling novels of all time.
            </p>
            <p>Author: M.Mitchell </p>
            <p>Price: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book6img} alt="Book 6" />
          <div className="card-body">
            <h3>The Man With The Golden Gun</h3>
            <p className="card-text">
              To prove his worth to the Service, 007 must hunt down and
              eliminate his fiercest opponent yet: "Pistols" Scaramanga
            </p>
            <p>Author: I.Fleming</p>
            <p>Price: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book7img} alt="Book 7" />
          <div className="card-body">
            <h3>Casino Royale</h3>
            <p className="card-text">
              007 is dispatched to a French casino in Royale-les-Eaux. His
              mission? Bankrupt a ruthless Russian agent who’s been on a bad
              luck streak at the baccarat table.
            </p>
            <p>Author: I.Fleming</p>
            <p>Price: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book8img} alt="Book 8" />
          <div className="card-body">
            <h3>Muder in Mesopotamia</h3>
            <p className="card-text">
              {" "}
              The great Hercule Poirot investigates suspicious events at a
              Middle Eastern archaeological excavation site.
            </p>
            <p>Author: A.Christie</p>
            <p>Price: $24</p>
          </div>
        </div>
        {/* Add more card components here */}
      </div>

      <div className="appointment-section">
        <h3>Want to rent an book? Select your choices:</h3>

        {/* Checkbox list for books */}
        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck1"
            />
            <label className="form-check-label" htmlFor="bookCheck1">
              Serve to Win
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck2"
            />
            <label className="form-check-label" htmlFor="bookCheck2">
              Arsène Wenger
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck3"
            />
            <label className="form-check-label" htmlFor="bookCheck3">
              The Godfather
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck4"
            />
            <label className="form-check-label" htmlFor="bookCheck4">
              Goldfinger
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck5"
            />
            <label className="form-check-label" htmlFor="bookCheck5">
              Gone With The Wind
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck6"
            />
            <label className="form-check-label" htmlFor="bookCheck6">
              The Man With The Golden Gun
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck7"
            />
            <label className="form-check-label" htmlFor="bookCheck7">
              Casino Royale
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck8"
            />
            <label className="form-check-label" htmlFor="bookCheck8">
              Muder in Mesopotamia
            </label>
          </div>
        </div>
      </div>

      <div className="booking-form" style={{ maxWidth: "400px" }}>
        {/* Name Input */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            style={{ display: "block", width: "100%" }}
            title="Enter your name here"
          />
        </div>

        {/* Email Input */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="emailAddress"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            name="email"
            value={paymentDetails.email}
            placeholder="Enter your email address"
            onChange={handleInputChange}
            style={{ display: "block", width: "100%" }}
            title="Enter your email address here"
          />
        </div>

        {/* Date Picker for Appointment */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="appointmentDate"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Choose your date you want to start to rent:
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date: React.SetStateAction<Date>) => setStartDate(date)}
            filterDate={isWeekday}
            className="form-control"
          />
        </div>
      </div>

      <div className="payment-form">
        <h3>Payment Details</h3>
        {/* Cardholder Name */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="cardholderName"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Cardholder Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cardholderName"
            name="cardholderName"
            value={paymentDetails.cardholderName}
            onChange={handleInputChange}
            placeholder="Enter cardholder's name"
            title="Enter your cardholder's name here"
          />
        </div>

        {/* Card Number */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="cardNumber"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Credit Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter card number"
            title="Enter your number here"
          />
        </div>

        {/* Expiry Date and CVV */}
        <div
          className="form-group"
          style={{ display: "flex", margin: "10px 0" }}
        >
          <div style={{ marginRight: "10px" }}>
            <label
              htmlFor="expiryDate"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Expiry Date
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              title="Enter your card's expiry date here"
            />
          </div>

          <div>
            <label
              htmlFor="cvv"
              style={{ display: "block", marginBottom: "5px" }}
            >
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              title="Enter your card's verification value here"
            />
          </div>
        </div>
      </div>

      <div className="form-group" style={{ display: "flex", margin: "20px 0" }}>
        <button
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
          onClick={GoBack}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
          onClick={ValidateForm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ProductList;
