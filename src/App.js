import * as React from "react";
import { Provider } from "react-redux";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MyTable />} />
          <Route path="/myform" element={<MyForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
