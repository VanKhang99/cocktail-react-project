import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktailList, loading } = useGlobalContext();

  console.log("IN COCKTAILLIST");
  if (loading) {
    return <Loading />;
  }

  if (cocktailList.length < 1) {
    return (
      <h2 className="section__title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section-cocktail">
      <h1 className="section-cocktail__title">Cocktails</h1>
      <ul className="cocktail__list">
        {cocktailList.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default CocktailList;
