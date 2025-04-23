import Navbar from "./components/navbar";
import Summary from "./components/summary";
import Transactions from "./components/transactions";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-start font-inter">
      <section className="max-w-3/4 w-2/4 h-full flex flex-col gap-14 py-8">
        <Navbar />
        <Summary />
        <Transactions />
      </section>
    </main>
  );
}

export default App;
