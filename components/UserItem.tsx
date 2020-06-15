import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../generate/types";
import { theme } from "../theme";

interface Props {
  width: number;
  height: number;
  collaborator: User;
}

const UserItem = (props: Props) => {
  const { collaborator } = props;
  const dynamicStyleInstance = styleInline(props);
  return (
    <View style={style.container}>
      <Image
        style={dynamicStyleInstance.image}
        source={collaborator.avatarUrl}
      />
      <Text style={style.text}>{collaborator.name}</Text>
    </View>
  );
};
const styleInline = ({ width, height }: Props) =>
  StyleSheet.create({
    image: {
      width,
      height,
    },
  });

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: theme.colors.white,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    paddingLeft: "0.5rem",
    fontSize: 15,
    flexDirection: "column-reverse",
  },
});

export default UserItem;
