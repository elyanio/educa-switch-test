import * as React from "react";
import { StyleSheet, View } from "react-native";
import { UserList } from "../container/UserList";

type Route = {
  params: { nameRepo: string; descriptionRepo: string; owner: string };
};

export default function CollaboratorScreen({
  route: {
    params: { nameRepo, descriptionRepo, owner },
  },
}: {
  route: Route;
}) {
  return (
    <View style={styles.container}>
      <UserList route={{ params: { nameRepo, descriptionRepo, owner } }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
