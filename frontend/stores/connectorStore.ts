import WalletConnect from "@walletconnect/client";
import { makeObservable, action, reaction, computed, observable } from "mobx";
import { useWalletConnect } from '@walletconnect/react-native-dapp';

class ConnectorStore {

    chainId: number = null;
    accounts: string[];
    networkId: number;
    rpcUrl: string;
    connected: boolean = false;

    constructor() {

      makeObservable(this, {
        chainId: observable,
        connected: observable,
      });

      // this.connector = connector;

      // this.connector = useWalletConnect();
      
      // this.connector = useWalletConnect()
  }


}

export default ConnectorStore;
