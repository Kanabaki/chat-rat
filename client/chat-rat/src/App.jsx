import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Register from "../src/components/accounts/register";
import Login from "../src/components/accounts/login";
import Profile from "./components/accounts/profile";
import WithPrivateRoute from "./utils/WithPrivateRoute.jsx";
import ChatLayout from "./components/layout/chatlayout";
import Header from "./components/layout/header";
import ErrorMessage from "./components/layout/errorMessage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
