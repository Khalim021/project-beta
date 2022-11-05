import Navbar from './components/abdulaziz/Navbar/Navbar';
import BuildSpecific from './components/abdulaziz/BuildSpecific/BuildSpecific';
import Header from './components/abdulaziz/Header/Header';
import Management from "./components/shaxzod's task/Management";
import CustomerSupport from "./components/shaxzod's task/CustomerSupport";
import Collaborative from "./components/shaxzod's task/Collaborative";
import ContactExperts from "./components/javharbek/contactExperts/contact";
import StrategySlider from "./components/javharbek/contentStrategy/strategySlider";
import PriceTable from "./components/javharbek/priceTable/priceTable";

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
    </div>
    // branch
  );
}

export default App;
