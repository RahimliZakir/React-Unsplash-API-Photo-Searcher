import axios from "axios";

// const YOUR_ACCESS_KEY = "4CR8tuOEp1v_i_S1QR9TnDdVhE__ll-p9Vx4nj4_WTk";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
});
