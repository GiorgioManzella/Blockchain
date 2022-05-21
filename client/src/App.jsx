import { Navbar, Welcome, Services, Transactions, Footer } from "";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
