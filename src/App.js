import Components from "./Components";

function App() {
  return (
    <>
      <Components.Navbar />
      <div>
        <div className="row">
          <div
            className="col-md-2"
            style={{ background: "#80147f", width: "260px" }}
          >
            <Components.Sidebar />
          </div>
          <div className="col-md-10">
            <p>body</p>
          </div>
        </div>
        <Components.Footer />
      </div>
    </>
  );
}

export default App;
