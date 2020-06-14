import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { DataRepoResultType } from "../types";
import { ListItemView } from "./ListItemView";

interface Props {
  data: DataRepoResultType[];
  onItemPress: (itemId: string) => void;
}

interface RenderItemProps {
  item: DataRepoResultType;
}

export const RepoListView = ({ data, onItemPress }: Props) => {
  const _renderItem = useCallback(
    ({
      item: { id, repositoryName, repositoryDescription, stargazers },
    }: RenderItemProps) => (
      <ListItemView
        id={id}
        title={repositoryName}
        description={repositoryDescription}
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
