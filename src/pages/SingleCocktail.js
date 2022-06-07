import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="single-cocktail__title">No cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="single-cocktail">
      <Link to="/" className="button button--primary">
        Back home
      </Link>

      <h1 className="single-cocktail__name">{name}</h1>

      <div className="single-cocktail__inner">
        <img src={image} alt={name} className="single-cocktail__image" />
        <div className="single-cocktail__content">
          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">name :</span> {name}
          </p>

          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">category :</span>{" "}
            {category}
          </p>

          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">info :</span> {info}
          </p>

          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">glass :</span> {glass}
          </p>

          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">instructions :</span>{" "}
            {instructions}
          </p>

          <p className="single-cocktail__data">
            <span className="single-cocktail__data-text">ingredients :</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? (
                <span key={index}> {ingredient} </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
