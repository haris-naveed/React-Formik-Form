import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalDetails from "./components/PersonalDetails";
import AcademicDetaiils from "./components/AcademicDetaiils";
import ProfessionalDetails from "./components/ProfessionalDetails";

function App() {
  return (
    <div className="App">
      <PersonalDetails />
      <AcademicDetaiils />
      <ProfessionalDetails />
    </div>
  );
}

export default App;
