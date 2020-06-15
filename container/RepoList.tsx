import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { RepoList as RepoListView } from "../components/RepoList";
import { Repository, useSearchQuery } from "../generate/types";

export const RepoList = () => {
  const { data, refetch } = useSearchQuery({
    fetchPolicy: "cache-only",
    variables: {
      query: "",
    },
  });

  const dataPrepared = useMemo(() => {
    if (!data || !data.search.edges) return [];
    return data.search.edges?.map((item) => {
      return (item?.node as any) as Repository;
    });
  }, [data]);

  const navigation = useNavigation();
  const onItemPressMock = (itemId: string) => {
    navigation.navigate("Links");
  };

  return <RepoListView data={dataPrepared} onItemPress={onItemPressMock} />;
};
