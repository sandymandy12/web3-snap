import React from "react";
// import User from "../../types/user"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text  testID="tid-message">{"Loading.."}</Text>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFC00",
  },
});
