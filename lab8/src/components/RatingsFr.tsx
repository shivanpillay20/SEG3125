// Ratings.js
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  bookTitle: string;
  rating: number;
}

interface FormErrors {
  name?: string;
  bookTitle?: string;
  rating?: string;
}
const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Validate Name
  if (!values.name.trim()) {
    errors.name = "Le nom est requis";
  }

  // Validate Book Title
  if (!values.bookTitle.trim()) {
    errors.bookTitle = "Le titre du livre est requis";
  }

  // Validate Rating
  if (values.rating < 1 || values.rating > 5) {
    errors.rating = "L'évaluation doit être comprise entre 1 et 5";
  }

  return errors;
};

function RatingsFr() {
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate("/");
  };
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    bookTitle: "",
    rating: 1,
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
      alert("Formulaire soumis");
    }
  };
  return (
    <div className="ratings">
      <NavigationBar />

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
            placeholder="Entrer le nom"
          />
        </div>

        <div>
          <label
            htmlFor="bookTitle"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Titre du livre
          </label>
          <input
            id="bookTitle"
            name="bookTitle"
            value={formValues.bookTitle}
            onChange={handleChange}
            style={{ display: "block", width: "100%" }}
            placeholder="Entrez le titre du livre"
          />
        </div>

        <div>
          <label
            htmlFor="rating"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Evaluation
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            placeholder="Entrez un nombre entre 1 et 5"
            onChange={handleChange}
            style={{ display: "block", width: "100%" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Commentaires
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
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default RatingsFr;
