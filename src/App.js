import './index.css';
// import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Routes from './admin/routes';
import UserRoutes from "./user/routes";
function App() {
  return (
    <div>
      <Routes/>
      <UserRoutes />
    </div>

  );
}

export default App;
