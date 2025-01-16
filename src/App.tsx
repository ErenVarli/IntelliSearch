import IntelliSearch from "./pages/IntelliSearch";
import { settingsSearchBar } from "./systemScript/apiSettings";
import { Routes, Route } from "react-router-dom";
function App() {
  settingsSearchBar();
  return (
    <>
      <Routes>
        <Route path="/intellisearch/" element={<IntelliSearch />} /> 
      </Routes>
    </>
  );
}

export default App;
