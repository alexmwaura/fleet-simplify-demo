import Components from "./Components";
function App() {
  return (
    <>
      <Components.Navbar />
      <div className="container" style={{marginTop: '100px'}}>
        <div className="row">
          <div className="col-md-2">
            <Components.Sidebar />
          </div>
          <div className="col-md-10">
            <p>body</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
