import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import RepoItem from "./RepoItem";
import { Repository } from "../generate/types";

interface Props {
  data: Repository[];
  onItemPress: (itemId: string) => void;
}

interface RenderItemProps {
  item: Repository;
}

export const RepoList = ({ data, onItemPress }: Props) => {
  const _renderItem = useCallback(
    ({
      item: { id, name, description, stargazers },
    }: RenderItemProps) => (
      <RepoItem
        id={id}
        title={name}
        description={description}
        onPress={onItemPress}
        rating={stargazers}
      />
    ),
    [onItemPress]
  );

  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
  },
});
