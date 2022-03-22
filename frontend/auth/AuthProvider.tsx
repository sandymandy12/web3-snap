import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { useStore } from "../stores/store";

const AuthProvider: React.FC = ({ children }) => {
  const { setUser } = useStore().userStore;
  const connector = useStore().connector;

  
  useEffect(() => {
      connector.on("change", () => {
          connector.connected ? 
      })
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [setUser]);

  useEffect(() => {
    // Ignore Android timers
    LogBox.ignoreLogs(["Setting a timer"]);
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
