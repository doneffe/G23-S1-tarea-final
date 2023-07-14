import axios from "axios";

export const GetCategorias = async () => {
  const url_base = process.env.REACT_APP_BASE_URL;
  try {
    const response = await axios({
      url: url_base + "endpoints",
      method: "GET",
    });
    //console.log(Object.keys(response.data));
    return Object.keys(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

/*
export const GetEndpointsInfo = async (url_param) => {
  try {
    const response = await axios({
      url: url_param + "?amount=10",
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
*/