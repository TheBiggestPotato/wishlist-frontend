import { useContext } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [token, setToken] = useState();
  const [isLogged, setLogged] = useState(0);

  return (
    <AuthContext.Provider value={{ token, setToken, isLogged, setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
