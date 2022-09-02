import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./utils";
import { Layout } from "./Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <AllRoutes />
          </Layout>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
