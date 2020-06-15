import React, { useCallback } from "react";
import { Search } from "../components/Search";
import { useSearchQuery } from "../generate/types";

const RepoSearch = () => {
  const { refetch } = useSearchQuery({
    fetchPolicy: "network-only",
    variables: {
      query: "",
    },
  });

  const onChange = useCallback(
    (text: string) => {
      refetch({
        query: text,
      })
    },
    [refetch],
  )

  return <Search query="" onChange={onChange} />;
};

export default RepoSearch;
