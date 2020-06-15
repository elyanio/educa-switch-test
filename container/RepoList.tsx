import React, { useMemo } from "react";
import { RepoList as RepoListView } from "../components/RepoList";
import { useSearchQuery, Repository } from "../generate/types";

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
  const onItemPressMock = (itemId: string) => {};

  return <RepoListView data={dataPrepared} onItemPress={onItemPressMock} />;
};
