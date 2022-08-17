import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home({clients, photos}) {
  return (
    <>
      <Navbar />
      <div className="mt-20 h-96 flex justify-center items-center">
        <div className="xl p-8">
          <Cards clients={clients} />
        </div>
      </div>
      <Footer />

    </>  

  )
}

Home.getInitialProps = async function () {
  try {
      const res = await axios.get('https://renanfcgg.github.io/jsonapi/jsonapi.json');
      const clients = res.data;
      console.log(res)
      return { clients: clients.slice(0, 3) };
  } catch (error) {
      console.log(error);
      return { clients : []}
  }
}
