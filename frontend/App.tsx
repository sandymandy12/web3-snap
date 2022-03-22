// import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
// import { useWalletConnect } from '@walletconnect/react-native-dapp';
import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import localhost from 'react-native-localhost';
// import Web3 from 'web3';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

import { store, StoreContext } from "./stores/store";

// import Hello from '../artifacts/contracts/Hello.sol/Hello.json';

// const styles = StyleSheet.create({
//   center: { alignItems: 'center', justifyContent: 'center' },
//   // eslint-disable-next-line react-native/no-color-literals
//   white: { backgroundColor: 'white' },
// });


// const shouldDeployContract = async (web3, abi, data, from: string) => {
//   const deployment = new web3.eth.Contract(abi).deploy({ data });
//   const gas = await deployment.estimateGas();
//   const {
//     options: { address: contractAddress },
//   } = await deployment.send({ from, gas });
//   return new web3.eth.Contract(abi, contractAddress);
// };

export default function App(): JSX.Element {
  // const connector = useWalletConnect()

  
  // const web3 = React.useMemo(
  //   () => new Web3(new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)),
  //   [HARDHAT_PORT]
  // );


  // const killSession = React.useCallback(() => {
  //   return connector.killSession();
  // }, [connector]);

  // React.useEffect(() => {
  //   void (async () => {
  //     const { address } = await web3.eth.accounts.privateKeyToAccount(HARDHAT_PRIVATE_KEY);
  //     const contract = await shouldDeployContract(
  //       web3,
  //       Hello.abi,
  //       Hello.bytecode,
  //       address
  //     );
  //     setMessage(await contract.methods.sayHello('React Native').call());
  //   })();
  // }, [web3, shouldDeployContract, setMessage, HARDHAT_PRIVATE_KEY]);

  // const signTransaction = React.useCallback(async () => {
  //   try {
  //      await connector.signTransaction({
  //       data: '0x',
  //       from: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3',
  //       gas: '0x9c40',
  //       gasPrice: '0x02540be400',
  //       nonce: '0x0114',
  //       to: '0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359',
  //       value: '0x00',
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [connector]);

  // const isLoadingComplete = useCachedResources();
  
  // return (
  //   <StoreContext.Provider value={store}>
  //     <Navigation colorScheme={colorScheme} />
  //     <StatusBar />
  //   </StoreContext.Provider> 
  // )

  return (
    <StoreContext.Provider value={store}>
      {/* <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}> */}
        {/* <Text  testID="tid-message">{`ChainID: ${connector.chainId}`}</Text> */}
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
        
        {/* {!connector.connected && (
          <TouchableOpacity onPress={connect}>
            <Text>Connect a Wallet</Text>
          </TouchableOpacity>
        )}
        {!!connector.connected && (
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        )} */}
      {/* </View> */}
    </StoreContext.Provider>
  );
}