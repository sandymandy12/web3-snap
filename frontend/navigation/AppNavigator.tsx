import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
// import PostsCreateScreen from "../../screens/PostsCreateScreen";
import { AppStackParamList } from "../types/navigation";
// import PostsPreview from "../posts/preview/PostsPreview";
// import PostsView from "../posts/view/PostsView";
// import StoriesView from "../stories/view/StoriesView";
// import Menu from "../../components/Menu";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#FFFC00" },
        headerTitleStyle: { color: "black" },
        headerTintColor: "black",
        title: "",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen
        name="PostsCreate"
        component={PostsCreateScreen}
        options={{ headerBackTitle: "Back to Posts" }}
      />
      <Stack.Screen
        name="PostsPreview"
        component={PostsPreview}
        options={{ headerBackTitle: "Messages" }}
      />
      <Stack.Screen
        name="PostsView"
        component={PostsView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StoriesView"
        component={StoriesView}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
