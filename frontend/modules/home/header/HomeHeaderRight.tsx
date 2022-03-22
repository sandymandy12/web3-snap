import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../../../types/navigation";

const HomeHeaderRight = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const openStories = async () => {
    // navigation.navigate("StoriesView");
  };
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Icon
        type="material"
        name="chat"
        color="black"
        size={24}
        onpress={openStories}
      />
    </TouchableOpacity>
  );
};

export default HomeHeaderRight;
