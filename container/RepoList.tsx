import React from "react";
import { RepoListView } from "../components/RepoList";
import { DataRepoResultType } from "../types";
import { useNavigation } from "@react-navigation/native";

const mockData: DataRepoResultType[] = [
  {
    id: "1",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "2",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "3",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "4",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "5",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "6",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "7",
    repositoryName: "Lorem ipsum dolor sit amet.",
    repositoryDescription:
      "Vero nisi explicabo quae cum impedit totam temporibus, illo libero voluptates, minima quas odio cumque consequuntur, dolor delectus. Nobis fugit libero eius.",
    stargazers: 5422,
    avatarUrl: "Lorem ipsum dolor sit amet.",
    userLogin: "Lorem ipsum dolor sit amet.",
  },
];
export const RepoList = () => {

  const navigation = useNavigation();
  const onItemPressMock = (itemId: string) => {
    navigation.navigate("Links")
  };

  return <RepoListView data={mockData} onItemPress={onItemPressMock} />;
};
