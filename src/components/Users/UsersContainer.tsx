import React, {ChangeEvent, FC, useEffect, useState} from "react";
import Users from "./Users/Users";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/store";
import {fakeAddUser, fakeDeleteUser, fakeEditUser, loadUsers} from "../../redux/reducers/users-reducer";
import {FormDataType, SortingTypes, SortOrder, UserType} from "../../types/users";
import {getUsers, getUsersAreLoading} from "../../redux/reducers/user-selectors";
import EditDialog from "../Dialogs/EditDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import {v4 as uuidv4} from 'uuid';

type MapStatePropsType = {
    usersAreLoading: boolean
    users: UserType[]
}

type MapDispatchPropsType = {
    loadUsers: () => void
    fakeDeleteUser: (id: string | number) => void
    fakeAddUser: (user: UserType) => void
    fakeEditUser: (user: UserType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type CitiesType = {
    [key: string]: string
}


const UsersContainer: FC<PropsType> = ({users, usersAreLoading, loadUsers, fakeAddUser, fakeDeleteUser, fakeEditUser}) => {
    const [searchText, setSearchText] = useState('');
    const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<null | UserType>(null);
    const [selectedCity, setSelectedCity] = useState<string>('all');
    const [cities, setCities] = useState<string[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);
    const [sortKey, setSortKey] = useState<SortingTypes>();
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [showOnlyActive, setShowOnlyActive] = useState<boolean>(false);

    useEffect(() => {
        loadUsers()
    }, []);

    useEffect(() => {
        filterUsers()
    }, [users, searchText, sortKey, selectedCity, sortOrder, showOnlyActive]);

    useEffect(() => {
        const cities: CitiesType = {};
        users.forEach((user: UserType) => {
            if (!cities[user.city]) {
                cities[user.city] = ''
            }
        });
        setCities(Object.keys(cities));
    }, [users]);

    const filterUsers = () => {
        const searchTextVal = searchText.trim().toLowerCase();
        let matches = [...users];

        //search matches
        if(searchTextVal.length > 0) {
            matches = users.filter(({name, surname}) => {
                return name.trim().toLowerCase().includes(searchTextVal) ||
                    surname.trim().toLowerCase().includes(searchTextVal);
            });
        }

        //sort by city
        if (selectedCity !== 'all') {
            matches = matches.filter(({city}) => city === selectedCity)
        }

        if(showOnlyActive) {
            matches = matches.filter(({active}) => active === true)
        }

        //order by sortKey
        if (sortKey) {
            const sortedUsers = matches.sort((a, b) => (a[sortKey] > b[sortKey]) ? 1 : ((b[sortKey] > a[sortKey]) ? -1 : 0));
            sortOrder === 'asc' ? setFilteredUsers(sortedUsers) : setFilteredUsers(sortedUsers.reverse());
        } else {
            setFilteredUsers(matches)
        }
    };


    const onDeleteUser = (id: string | number) => {
        console.log('delete user');
        fakeDeleteUser(id);
        setDeleteDialogIsOpen(false)
    };

    const addUser = (user: FormDataType) => {
        console.log('add user');
        fakeAddUser({...user, id: uuidv4()})
    };

    const editUser = (user: FormDataType) => {
        console.log('edit user');
        fakeEditUser({...user, id: user.id || uuidv4()})
    };

    const createUpdateUser = (formData: FormDataType, type: 'add' | 'edit') => {
        switch (type) {
            case 'add':
                addUser(formData);
                break;
            case 'edit':
                editUser(formData);
                break;
            default:
                return false
        }
    };

    const openCreateUpdateDialog = (value: boolean, user: UserType | null) => {
        setSelectedUser(user);
        setEditDialogIsOpen(value);
    };

    const openDeleteDialog = (value: boolean, user: UserType | null) => {
        setSelectedUser(user);
        setDeleteDialogIsOpen(value);
    };


    const onChangeSearchText = (searchText: string) => {
        setSearchText(searchText)
    };

    const handleSortKeyChange = (type: SortingTypes) => {
        if (sortKey === type) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(type);
            setSortOrder('asc');
        }
    };

    const handleCityChange = (event: any) => {
        setSelectedCity(event.target.value);
    };

    return (
        <>
            <Users
                users={filteredUsers}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
                usersAreLoading={usersAreLoading}
                searchAction={onChangeSearchText}
                sortKey={sortKey}
                sortOrder={sortOrder}
                handleSortKeyChange={handleSortKeyChange}
                cities={cities}
                selectedCity={selectedCity}
                setSelectedCity={handleCityChange}
                setShowOnlyActive={setShowOnlyActive}
                showOnlyActive={showOnlyActive}
                filterUsers={filterUsers}
            />

            <EditDialog
                createUpdateUser={createUpdateUser}
                isOpen={editDialogIsOpen}
                user={selectedUser}
                openCreateUpdateDialog={openCreateUpdateDialog}
            />

            <DeleteDialog
                isOpen={deleteDialogIsOpen}
                setIsOpen={openDeleteDialog}
                deleteAction={onDeleteUser}
                itemToDelete={selectedUser}
            />
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        usersAreLoading: getUsersAreLoading(state),
    }
};

export default connect(mapStateToProps, {
    loadUsers,
    fakeEditUser,
    fakeDeleteUser,
    fakeAddUser,
})(UsersContainer)
