import Components from "./Components";

function App() {
  return (
    <>
      <Components.Navbar />
      <div className="row">
        <Components.Sidebar />
        <Components.MainGridLayout />

      </div>
      <Components.Footer />
    </>
  );
}

export default App;
