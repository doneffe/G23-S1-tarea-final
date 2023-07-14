import axios from "axios";
export const GetDataCategoria = async (url_param) => {
    try {
      const response = await axios({
        url: url_param + "?amount=10",
        method: "GET",
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };