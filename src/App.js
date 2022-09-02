import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./utils";
import { Layout } from "./Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const persistor = persistStore(store);

  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <AllRoutes />
          </Layout>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
