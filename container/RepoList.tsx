import React, { useMemo } from "react";
import { RepoListView } from "../components/RepoList";
import { DataRepoResultType } from "../types";
import { useSearchQuery } from "../generate/types";

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
      const node = {
        ...item?.node,
        stargazers: (item?.node as any).stargazers.totalCount,
      };
      return (node as any) as DataRepoResultType;
    });
  }, [data]);
  const onItemPressMock = (itemId: string) => {};

  return <RepoListView data={dataPrepared} onItemPress={onItemPressMock} />;
};
