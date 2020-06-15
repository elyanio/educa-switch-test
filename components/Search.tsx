import React, { useState, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import _ from "lodash";

interface Props {
  query: string;
  onChange: (text: string) => void;
}

export const Search = ({ query, onChange }: Props) => {
  const [userQuery, setUserQuery] = useState(query);
  const delayedQuery = useCallback(
    _.debounce((q: string) => onChange(q), 500),
    []
  );
  const onChangeText = (text: string) => {
    setUserQuery(text);
    delayedQuery(text);
  };
  return (
    <Searchbar
      placeholder="Search repo"
      onChangeText={onChangeText}
      value={userQuery}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginRight: 5,
    alignItems: "center",
  },
  text: {
    marginLeft: 2,
    fontSize: 14,
  },
});
