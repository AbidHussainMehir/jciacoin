import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./utils";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <AllRoutes />
      </Layout>
    </Router>
  );
}

export default App;
