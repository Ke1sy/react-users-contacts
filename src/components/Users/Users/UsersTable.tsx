import React, {FC, useEffect, useState} from "react";
import {
    TableContainer,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Box,
    Container,
    Paper, Link, Avatar, WithStyles,
} from "@material-ui/core";
import cn from "classnames";
import {SortingTypes, SortOrder, UserType} from "../../../types/users";
import Preloader from "../../Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faPencilAlt, faTrashAlt, faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import withTableStyles from "./usersTableStyles";
import userImg from "../../../assets/images/user-image.jpg";

interface IUsersTable extends WithStyles {
    users: UserType[];
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void;
    openDeleteDialog: (value: boolean, user: UserType | null) => void;
    usersAreLoading: boolean;
    sortKey?: SortingTypes;
    handleSortKeyChange: (event: any) => void;
    sortOrder: SortOrder;
}

const COLUMNS = [
    {
        name: 'Name',
        sortKey: SortingTypes.BY_NAME,
    }, {
        name: 'Surname',
        sortKey: SortingTypes.BY_SURNAME,
    }, {
        name: 'City',
        sortKey: SortingTypes.BY_CITY,
    }, {
        name: 'Email',
        sortKey: SortingTypes.BY_EMAIL,
    }, {
        name: 'Phone',
        sortKey: SortingTypes.BY_PHONE,
    },
];

const UsersTable: FC<IUsersTable> = ({users, openCreateUpdateDialog, openDeleteDialog, usersAreLoading, sortKey, sortOrder, handleSortKeyChange, classes}) => {
    const [userToShow, setUserToShow] = useState<null | UserType>(null);
    useEffect(() => {
        if (!userToShow && users)
            setUserToShow(users[0])
    }, [users]);

    const onEdit = (user: UserType) => {
        openCreateUpdateDialog(true, user);
    };

    const onDelete = (user: UserType) => {
        openDeleteDialog(true, user);
    };

    return (
        <Box className={classes.wrap}>
            <Container maxWidth='lg'>
                <Preloader showPreloader={usersAreLoading}/>
                <div className={classes.grid}>
                    <div className={classes.gridLeft}>
                        {userToShow &&
                        <Paper className={classes.userInfo}>
                          <Box className={classes.userImg}>
                            <Avatar alt={userToShow.name} src={userToShow.id === 3 ? userImg : undefined}
                                    className={classes.avatar}/>
                          </Box>
                          <Box className={classes.userInfoItem}>
                            <Box className={classes.userInfoLabel}>Name:</Box>
                            <Box>{userToShow.name}</Box>
                          </Box>
                          <Box className={classes.userInfoItem}>
                            <Box className={classes.userInfoLabel}>Surname:</Box>
                            <Box>{userToShow.surname}</Box>
                          </Box>
                          <Box className={classes.userInfoItem}>
                            <Box className={classes.userInfoLabel}>City:</Box>
                            <Box>{userToShow.city}</Box>
                          </Box>
                          <Box className={classes.userInfoItem}>
                            <Box className={classes.userInfoLabel}>Email:</Box>
                            <Link href={`mailto:${userToShow.email}`}>{userToShow.email}</Link>
                          </Box>
                          <Box className={classes.userInfoItem}>
                            <Box className={classes.userInfoLabel}>Phone:</Box>
                            <Link href={`tel:${userToShow.phone}`}>{userToShow.phone}</Link>
                          </Box>
                        </Paper>
                        }
                    </div>
                    <div className={classes.gridRight}>
                        <Paper className={classes.paper}>
                            <TableContainer component='div'>
                                <Table className={classes.table} aria-label="caption table">
                                    <TableHead className={classes.tableHead}>
                                        <TableRow>
                                            {COLUMNS.map(col => <TableCell
                                                key={col.name}
                                                align={col.name === 'Phone' ? "right" : "left"}
                                                onClick={() => handleSortKeyChange(col.sortKey)}
                                                className={cn(classes.headCell)}>
                                                {col.name}
                                                {sortKey === col.sortKey &&
                                                <FontAwesomeIcon icon={sortOrder === 'asc' ? faArrowDown : faArrowUp}
                                                                 className={classes.arrowIcon}/>
                                                }

                                            </TableCell>)}
                                            <TableCell align="right" className={classes.headCell}/>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user) => {
                                            const {id, name, email, phone, city, surname, active} = user;
                                            return (
                                                <TableRow key={id} onClick={() => setUserToShow(user)}
                                                          className={userToShow?.id === id ? cn([classes.activeRow, classes.tableRow]) : classes.tableRow}>
                                                    <TableCell className={classes.tableCell} >
                                                        <FontAwesomeIcon icon={active ? faEye : faEyeSlash}
                                                                         className={classes.eyeIcon} size='sm'/>
                                                        {name}
                                                    </TableCell>
                                                    <TableCell className={classes.tableCell}
                                                               align="left">{surname}</TableCell>
                                                    <TableCell className={classes.tableCell}
                                                               align="left">{city}</TableCell>
                                                    <TableCell className={classes.tableCell}
                                                               align="left">{email}</TableCell>
                                                    <TableCell className={classes.tableCell}
                                                               align="left">{phone}</TableCell>
                                                    <TableCell className={classes.tableCell} align="right">
                                                        <Box component="span" className={classes.actionsIcon}
                                                             onClick={() => onEdit(user)}>
                                                            <FontAwesomeIcon icon={faPencilAlt} size='sm'/>
                                                        </Box>
                                                        <Box component="span" className={classes.actionsIcon}
                                                             onClick={() => onDelete(user)}>
                                                            <FontAwesomeIcon icon={faTrashAlt} size='sm'/>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                </div>
            </Container>
        </Box>
    )
};

export default withTableStyles(UsersTable);
