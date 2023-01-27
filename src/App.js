import './App.css';
import { NavBar, MarketingFooter, HomeCardCollection } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <HomeCardCollection isPaginated width={"100vw"} itemsPerPage={3} />
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
