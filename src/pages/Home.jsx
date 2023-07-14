import { Fragment, useEffect, useState } from "react";
import { GetDataCategoria } from "../api/getDataCategoria";

const Home = (props) => {
  const { handleSelectItem, selectedCategory } = props;
  const [data, setData] = useState();
  const url_req = process.env.REACT_APP_BASE_URL;

  try {
    useEffect(() => {
      const data = async () => {
        const response = await GetDataCategoria(
          url_req + (selectedCategory || "highfive")
        );
        setData(response);
        return response;
      };
      data();
    }, [selectedCategory]);
  } catch (error) {
    console.log(error);
  }

  return (
    <Fragment>
      {data ? (
        data.map((item, index) => (
          <section key={index} className="main-container__card">
            <h4 className="main-container__h4">{item.anime_name}</h4>
            <img
              className="main-container__img"
              src={item.url}
              alt={item.anime_name}
            />
          </section>
        ))
      ) : (
        <>Sin datos</>
      )}
    </Fragment>
  );
};

export default Home;
