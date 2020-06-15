import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { User } from "../generate/types";
import { theme } from "../theme";
import UserItem from "./UserItem";


interface Props {
  nameRepo: string;
  descriptionRepo: string;
  data: User[];
}

export const UserList = ({ nameRepo, descriptionRepo, data }: Props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{nameRepo}</Text>
      <Text style={style.description}>{descriptionRepo}</Text>
      <FlatList
        data={data}
        renderItem={({ item }: { item: User }) => (
          <View style={style.item}>
            <UserItem
              collaborator={item}
              height={theme.dimension.imageItem}
              width={theme.dimension.imageItem}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  item: {
    marginBottom: 5,
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
    paddingLeft: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    paddingLeft: 10,
    marginBottom: 15,
  },
});
