import "@/styles/globals.css";

import Navbar from "../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
