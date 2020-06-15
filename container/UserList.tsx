import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { UserList as UserListView } from "../components/UserList";
import { Repository, useCollaboratorsQuery } from "../generate/types";

type Route = {
  params: { nameRepo: string; descriptionRepo: string, owner: string };
};

export const UserList = ({
  route: {params: { nameRepo, descriptionRepo, owner }},
}: {
  route: Route;
}) => {
  const { data, refetch } = useCollaboratorsQuery({
    variables: {
      name: nameRepo,
      owner,
    },
  });

  const dataPrepared = useMemo(() => {
    if (!data || !data.repository || !data.repository?.collaborators) return [];
    const saveData = data.repository?.collaborators.edges || [];
    return saveData.map((item) => {
      return (item?.node as any) as Repository;
    });
  }, [data]);

  const navigation = useNavigation();

  return (
    <UserListView
      data={dataPrepared as any}
      nameRepo={nameRepo}
      descriptionRepo={descriptionRepo}
    />
  );
};

const dataApi = [
  { id: "1", name: "Alejandro", avatarUrl: "../assets/images/robot-prod.png" },
  {
    id: "2",
    name: "Alejandro",
    avatarUrl: "../assets/images/robot-prod.png",
  },
  {
    id: "3",
    name: "Alejandro",
    avatarUrl: "../assets/images/robot-dev.png",
  },
];
