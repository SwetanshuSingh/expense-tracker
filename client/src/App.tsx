import Navbar from "./components/navbar";
import Summary from "./components/summary";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-start font-inter">
      <section className="max-w-3/4 w-2/4 h-full flex flex-col gap-10 py-8">
        <Navbar />
        <Summary />
      </section>
    </main>
  );
}

export default App;
