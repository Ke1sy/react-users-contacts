import React, {FC, useEffect} from "react";
import {Box, Container} from "@material-ui/core";
import {SortingTypes, SortOrder, UserType} from "../../../types/users";
import UsersTable from "./UsersTable";
import UsersTopPanel from "./UsersTopPanel";

type UsersType = {
    users: UserType[];
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void;
    openDeleteDialog: (value: boolean, user: UserType | null) => void;
    usersAreLoading: boolean;
    searchAction: (searchText: string) => void;
    sortKey?: SortingTypes;
    handleSortKeyChange: (event: any) => void;
    selectedCity?: string;
    cities: string[];
    setSelectedCity: (event: any) => void;
    sortOrder: SortOrder;
    showOnlyActive: boolean;
    setShowOnlyActive: (active: boolean) => void;
    filterUsers: () => void
}

const Users: FC<UsersType> = ({
      users,
      openCreateUpdateDialog,
      openDeleteDialog,
      usersAreLoading,
      searchAction,
      sortKey,
      handleSortKeyChange,
      selectedCity,
      cities,
      setSelectedCity,
      sortOrder,
      showOnlyActive,
      setShowOnlyActive,
      filterUsers
  }) => {

    return (
        <Box>
            <UsersTopPanel
                searchAction={searchAction}
                openCreateUpdateDialog={openCreateUpdateDialog}
                selectedCity={selectedCity}
                cities={cities}
                setSelectedCity={setSelectedCity}
                showOnlyActive={showOnlyActive}
                setShowOnlyActive={setShowOnlyActive}
                filterUsers={filterUsers}
            />
            <UsersTable
                users={users}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
                usersAreLoading={usersAreLoading}
                sortKey={sortKey}
                sortOrder={sortOrder}
                handleSortKeyChange={handleSortKeyChange}
            />

        </Box>
    )
};

export default Users;
