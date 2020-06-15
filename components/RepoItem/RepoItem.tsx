import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { theme } from "../../theme";
import { ListItemTitle } from "./RepoTitleItem";
import { StargazerConnection } from "../../generate/types";

interface Props {
  onPress: (name: string, description: string | null | undefined, owner: string) => void;
  id: string;
  name: string;
  rating: StargazerConnection;
  description: string | null | undefined;
  owner: {
    login: string
  }
}

const RepoItem = ({ id, name, rating, description, owner, onPress }: Props) => {
  const handleOnPress = () => {
    onPress(name, description, owner.login);
  };

  return (
    <List.Item
      style={styles.item}
      title={<ListItemTitle title={name} rating={rating.totalCount} />}
      description={description}
      onPress={handleOnPress}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.colors.white,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
});

export default RepoItem;
