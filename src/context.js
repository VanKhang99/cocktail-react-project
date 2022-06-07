import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);

  console.log("Render");

  const fetchDrinks = useCallback(async () => {
    console.log("TEST fetchDrink");
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchInput}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        console.log("Test1");
        const newCocktailList = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktailList(newCocktailList);
      } else {
        setCocktailList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchInput]);

  useEffect(() => {
    fetchDrinks();
  }, [searchInput, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, cocktailList, setSearchInput }}>
      {children}
      {console.log("Test")}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
