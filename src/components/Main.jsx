import React, { Fragment, useState, useEffect, Suspense } from "react";
import { GetCategorias } from "../api/getCategorias";
import { camelize } from "../assets/js/camelize";
import "../assets/styles/Main.scss";
const LazyListBox = React.lazy(() => import("./Listbox.jsx"));
const LazyHome = React.lazy(() => import("../pages/Home.jsx"));

const Main = () => {
  const [data, setData] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const data = async () => {
      const response = await GetCategorias();
      setData(response);
      return response;
    };
    data();
  }, []);

  const handleSelectItem = (selectedItem) => {
    setSelectedCategory(selectedItem);
  };

  try {
    return (
      <Fragment>
        <main className="main-container">
          <Suspense
            fallback={<div className="main-container__div">Cargando...</div>}
          >
            <div className="main-container__div main-container__div--listbox">
              <h2 className="main-container__h2">
                Selecciona una categoría:<span> </span>
                <LazyListBox items={data} onSelect={handleSelectItem} />
              </h2>
              <h3 className="main-container__h3">
                {camelize(selectedCategory || "highfive")}
              </h3>
            </div>
            <div className="main-container__div main-container__div--home">
              <LazyHome
                handleSelectItem={handleSelectItem}
                selectedCategory={selectedCategory}
              />
            </div>
          </Suspense>
        </main>
      </Fragment>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Main;
