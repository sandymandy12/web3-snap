import { createContext, useContext } from "react";
// import { useWalletConnect } from '@walletconnect/react-native-dapp';

import UserStore from "./userStore";
import ConnectorStore from "./connectorStore"

// const walletConnect = useWalletConnect();

interface Store {
  userStore: UserStore;
  connectorStore: ConnectorStore;
}

export const store: Store = {
  userStore: new UserStore(),
  connectorStore: new ConnectorStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { userStore, connectorStore } = store;
  userStore.reset();
  connectorStore.killSession();
};
