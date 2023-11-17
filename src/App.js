import { About, Accounting, Footer, Header, Navbar, OurServices, Work } from "./components";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Header />
      <About />
      <OurServices />
      <Accounting />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
