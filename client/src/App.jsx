import {
  NavBar,
  Welcome,
  Services,
  Transactions,
  Footer,
} from "../src/components/index.js";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
