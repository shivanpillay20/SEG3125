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

function ProductListFr() {
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
      alert("L'adresse électronique n'est pas valide. Veuillez saisir une adresse électronique valide.");
      return false;
    }
    if (!isValidCardholderName(paymentDetails.cardholderName)) {
      alert("Le nom du titulaire de la carte n'est pas valide. Veuillez saisir un nom valide.");
      return false;
    }
    if (!isValidCreditCard(paymentDetails.cardNumber)) {
      alert(
        "Numéro de carte de crédit invalide. Veuillez saisir un numéro à 16 chiffres valide."
      );
      return false;
    }
    if (!isValidExpiryDate(paymentDetails.expiryDate)) {
      alert("Date d'expiration incorrecte. Veuillez saisir la date au format MM/AA.");
      return false;
    }
    if (!isValidCVV(paymentDetails.cvv)) {
      alert("CVV non valide. Veuillez saisir un numéro à 3 chiffres valide.");
      return false;
    }
    alert("Formulaire soumis !");
    return true;
  };

  const GoBack = () => {
    Navigate("/AppFr");
  };
  return (
    <div className="product-list" style={{ margin: "20px 80px" }}>
      <NavigationBar />
      <h2>Notre sélection de livres :</h2>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book1img} alt="Book 1" />
          <div className="card-body">
            <h3>Servir pour Gagner</h3>
            <p className="card-text">
            En 2011, Novak Djokovic a réalisé ce que les journalistes sportifs ont appelé la plus grande saison jamais réalisée par un joueur de tennis professionnel
             : Il a remporté dix titres, trois tournois du Grand Chelem et quarante-trois matchs consécutifs.
            </p>
            <p>Auteur: N.Djokovic </p>
            <p>Prix: $25</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book2img} alt="Book 2" />
          <div className="card-body">
            <h3>Arsène Wenger</h3>
            <p className="card-text">
            Wenger s'ouvre sur sa vie, partageant les principes de la réussite sur le terrain et en dehors du terrain, avec des leçons sur le leadership
            sur le terrain et en dehors, le développement personnel et le management.
            </p>
            <p>Auteur: A.Wenger </p>
            <p>Prix: $38</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book3img} alt="Book 3" />
          <div className="card-body">
            <h3>Le Parrain</h3>
            <p className="card-text">
            Le Parrain est devenu un élément de la culture nationale américaine, ainsi qu'une trilogie de films historiques.
            </p>
            <p>Auteur: M.Puzo </p>
            <p>Prix: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book4img} alt="Book 4" />
          <div className="card-body">
            <h3>Goldfinger</h3>
            <p className="card-text">
            Qui est Auric Goldfinger ?
           La Banque d'Angleterre veut le savoir et elle est également curieuse de savoir ce qu'il a fait de l'énorme stock d'or qu'il a accumulé depuis la guerre.
            James Bond est mis sur la piste.
            </p>
            <p>Auteur: I.Fleming </p>
            <p>Prix: $15</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book5img} alt="Book 5" />
          <div className="card-body">
            <h3>Autant en Emporte le Vent</h3>
            <p className="card-text">
            C'est l'histoire de Scarlett O'Hara, la fille gâtée et manipulatrice d'un riche propriétaire de plantation.
            Lauréat du prix Pulitzer et l'un des romans les plus vendus de tous les temps.
            </p>
            <p>Auteur: M.Mitchell </p>
            <p>Prix: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book6img} alt="Book 6" />
          <div className="card-body">
            <h3>L'Homme au pistolet d'or</h3>
            <p className="card-text">
            Pour prouver sa valeur au Service,
            007 doit traquer et éliminer son adversaire le plus féroce à ce jour : "Pistols" Scaramanga.
            </p>
            <p>Auteur: I.Fleming</p>
            <p>Prix: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book7img} alt="Book 7" />
          <div className="card-body">
            <h3>Casino Royale</h3>
            <p className="card-text">
            007 est envoyé dans un casino français à Royale-les-Eaux.
            Sa mission ? Faire banqueroute à un agent russe impitoyable qui n'a pas eu de chance au baccarat.
            </p>
            <p>Auteur: I.Fleming</p>
            <p>Prix: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book8img} alt="Book 8" />
          <div className="card-body">
            <h3>Meurtre en Mésopotamie </h3>
            <p className="card-text">
              {" "}
              Le grand Hercule Poirot enquête sur des événements suspects sur un site de fouilles archéologiques au Moyen-Orient.
            </p>
            <p>Auteur: A.Christie</p>
            <p>Prix: $24</p>
          </div>
        </div>
        {/* Add more card components here */}
      </div>

      <div className="appointment-section">
        <h3>Vous souhaitez louer un livre ? Sélectionnez vos choix :</h3>

        {/* Checkbox list for books */}
        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck1"
            />
            <label className="form-check-label" htmlFor="bookCheck1">
              Servir pour Gagner
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
              Le Parrain
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
              Autant en Emporte le Vent
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bookCheck6"
            />
            <label className="form-check-label" htmlFor="bookCheck6">
            L'Homme au pistolet d'or
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
            Meurtre en Mésopotamie 
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
            Votre nom
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            style={{ display: "block", width: "100%" }}
          />
        </div>

        {/* Email Input */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="emailAddress"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Votre adresse électroniques
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
          />
        </div>

        {/* Date Picker for Appointment */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="appointmentDate"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Choisissez la date à laquelle vous souhaitez commencer à louer :
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
        <h3>Modalités de paiement</h3>
        {/* Cardholder Name */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="cardholderName"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Nom du titulaire de la carte
          </label>
          <input
            type="text"
            className="form-control"
            id="cardholderName"
            name="cardholderName"
            value={paymentDetails.cardholderName}
            onChange={handleInputChange}
            placeholder="Enter cardholder's name"
          />
        </div>

        {/* Card Number */}
        <div className="form-group" style={{ margin: "10px 0" }}>
          <label
            htmlFor="cardNumber"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Numéro de la carte bancaire
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter card number"
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
              Date d'expirations
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
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

export default ProductListFr;
