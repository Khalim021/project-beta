import Navbar from './components/abdulaziz/Navbar/Navbar';
import BuildSpecific from './components/abdulaziz/BuildSpecific/BuildSpecific';
import Header from './components/abdulaziz/Header/Header';
import Management from "./components/shaxzod's task/Management";
import CustomerSupport from "./components/shaxzod's task/CustomerSupport";
import Collaborative from "./components/shaxzod's task/Collaborative";
import ContactExperts from "./components/javharbek/contactExperts/contact";
import StrategySlider from "./components/javharbek/contentStrategy/strategySlider";
import PriceTable from "./components/javharbek/priceTable/priceTable";
import Clients from "./components/doniyorbek/Clients";
import AdvBanner from "./components/doniyorbek/AdvBanner";
import Footer from "./components/doniyorbek/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BuildSpecific />
      <Management />
      <CustomerSupport />
      <Collaborative />
      <ContactExperts />
      <StrategySlider />
      <PriceTable />
      <Clients />
      <AdvBanner />
      <Footer />
    </div>
    // branch
  );
}

export default App;
