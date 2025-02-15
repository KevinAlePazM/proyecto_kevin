import './App.css'

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";
import AddWordModal from "./Components/AddWordModal";

function App() {
  return (
    <>
      <Navigator />
      <Router />
      <AddWordModal />
    </>
  )
}

export default App;
