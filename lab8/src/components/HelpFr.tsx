import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
interface FormValues {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}
const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Validate Name
  if (!values.name.trim()) {
    errors.name = "Le nom est requis";
  }

  // Validate Book Title
  if (!values.email.trim()) {
    errors.email = "Le courriel est requis";
  }
  const isValidEmail = (email: string) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  if (!isValidEmail(values.email) && values.email.trim()) {
    errors.email = "Le courriel n'est pas valide";
  }

  return errors;
};

function Help() {
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate("/");
  };
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validateForm(formValues);
    if (Object.keys(errorMessage).length > 0) {
      const firstErrorKey = Object.keys(errorMessage)[0];
      alert(errorMessage[firstErrorKey]);
    } else {
      alert("Message envoye");
    }
  };

  return (
    <div className="Help">
      <NavigationBar />
      <div>
        <h3>Comment louer vos livres préférés :</h3>
        
        <ol>Allez sur la page Liste des produits à partir de la page d'accueil.</ol>
        <ol>Lisez les titres et les descriptions des livres disponibles.</ol>
        <ol>Choisissez les livres que vous voulez dans les cases à cocher.</ol>
        <ol>Saisissez votre nom et votre adresse électronique.</ol>
        <ol>Saisissez les détails de votre paiement et assurez-vous qu'ils sont dans un format valide.</ol>
        <ol>Cliquez sur Confirmer pour confirmer votre location !</ol>
        <h3>Comment évaluer nos livres :</h3>
        <ol>Allez à la page d'évaluation depuis la page d'accueil.</ol>
        
        <ol>Allez à la page d'évaluation depuis la page d'accueilles titres et les descriptions des livres disponibles.</ol>
        <ol>Entrez le livre que vous voulez évaluer.</ol>
        <ol>Donnez une note entre 1 étoile et 5 étoiles.</ol>
        <ol>Ecrivez votre opinion sur le livre.</ol>
        <ol>Cliquez sur Confirmer pour confirmer votre évaluation !</ol>

        <h2>Besoin d'aide ? Contactez nous</h2>
    






        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Envoyer un courriel</h5>
            <p className="card-text">
              <form
                style={{ maxWidth: "400px", marginLeft: "10px" }}
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    style={{ display: "block", width: "100%" }}
                    placeholder="Entrez votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Courriel
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    style={{ display: "block", width: "100%" }}
                    placeholder="Entrez votre courriel"
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Message
                  </label>
                  <textarea style={{ display: "block", width: "100%" }} />
                </div>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                  onClick={GoBack}
                >
                  Retour
                </button>

                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
