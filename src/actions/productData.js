import axios from "axios";

const getListData = async () => {
  try {
    const response = await axios.get(`https://fe.dev.dxtr.asia/api/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getListData };
