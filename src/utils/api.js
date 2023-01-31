import gameId, { API_URL } from "../globals.js";

const API_FULL_URL = `${API_URL}/${gameId}/scores`;

const getData = async () => {
  try {
    const res = await fetch(API_FULL_URL);

    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (formData) => {
  try {
    const res = await fetch(API_FULL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Something went wrong");

    // const formattedResult = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getData;
