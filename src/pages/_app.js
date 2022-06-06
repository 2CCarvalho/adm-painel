import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = "/api";
  return (
    <>
      <Toaster />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
