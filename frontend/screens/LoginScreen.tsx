import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Image } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import randomName from "../randomName";
// import useSignInGoogle from "../../../hooks/useSignInGoogle";
import { useStore } from "../stores/store";

const Login = () => {
  const { setUser, loading } = useStore().userStore;
  const connector = useWalletConnect()

  const connect = React.useCallback(() => {
    // console.log(connector.connect());
    // if (connector.connected) {
    //   setUser({
    //     address: connector.accounts[0],
    //     displayName: randomName(),
    //     photoURL: ""
    //   })
    // }
    connector.connect()
    
  }, [connector])

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/image/app-icon.png")}
      />
      <Button
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        raised
        title="Connect Wallet"
        type="outline"
        // disabled={loading}
        // onPress={signInWallet}
        onPress={connect}
      />
      {!!connector.connected && setUser({
        connected: true,
        address: connector.accounts[0],
        displayName: randomName(),
        photoURL: ""
      })}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#FFFC00",
  },
  image: {
    height: 300,
    width: 300,
  },
  buttonContainer: {
    width: 300,
  },
  buttonTitle: {
    color: "black",
  },
});
