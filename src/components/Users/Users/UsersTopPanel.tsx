import React, {FC} from "react";
import {Box, Button, FormControl, FormControlLabel, Container, MenuItem, Select, Checkbox} from "@material-ui/core";
import {UserType} from "../../../types/users";
import Search from "../../Search/Search";
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";

type UsersTopPanelType = {
    searchAction: (searchText: string) => void;
    setSelectedCity: (event: any) => void;
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void;
    selectedCity?: string;
    cities: string[];
    showOnlyActive: boolean;
    setShowOnlyActive: (active: boolean) => void;
    filterUsers: () => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, rgba(26,102,98,1) 0%, rgba(27,88,93,1) 50%, rgba(21,54,87,1) 100%)',
        width: '100%',
        flexWrap: 'wrap',
        padding: '23px 0 10px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',
            marginTop: theme.spacing(5),
        },
    },

    btn: {
        borderRadius: 19,
        fontSize: '1rem',
        width: '100%',
        color: 'white',
        minHeight: "38px",
        textTransform: 'uppercase',
        fontWeight: 600,
        backgroundColor: '#207f79',
        paddingLeft: 44,

        '& .MuiButton-startIcon': {
            background: "#1a6761",
            width: "27px",
            height: "27px",
            position: "absolute",
            left: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        '& .MuiButton-label': {
           fontSize: 15
        }
    },

    menuItem: {
        fontSize: '1rem'
    },
    formLabel: {
        padding: theme.spacing(0, 1.5),
        backgroundColor: theme.palette.background.default,
        fontSize: '1rem'
    },
    grid: {
        display: 'flex'
    },

    gridLeft: {
        width: 227,
        marginRight: 15
    },

    gridCenter: {
        flexGrow: 1
    },
    gridRight: {
        width: 224
    },

    select: {
        width: 165,
        color: 'inherit',
        borderRadius: '19px',
        border: '1px solid #213b3c',
        backgroundColor: theme.palette.common.white,
        fontSize: "14px",
        height: "38px",
        paddingTop: 10,
        paddingBottom: 10,
    },

    checkbox: {
        marginLeft: 10,
        '& input': {
            '&:checked + svg': {
                color: '#fff'
            },

            '& + svg': {
                border: '1px solid #488081',
                borderRadius: 4,
                color: '#fff'
            }
        },
    },


    checkboxLabel: {
        color: theme.palette.common.white,
        fontSize: 15
    },

    checkboxIcon: {
        width: "18px",
        height: "18px",
        padding: "1px",
        background: "#1e3c3c",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #488081"
    },

    checkboxIconInner: {
        width: "16px",
        height: "16px",
        display: "block",
        background: "#fff",
        borderRadius: "4px",
        position: 'relative'
    },
    checkboxIconChecked: {},
    faCheck: {
        position: 'absolute',
        height: '12px',
        width: '12px !important',
        color: '#227e7b',
        top: "2px", left: "2px"
    },
    faPlus: {
        height: 13,
        width: 13,
    },
    filterBtn: {
        minWidth: 108,
        borderRadius: 19,
        color: theme.palette.common.white,
        border: '2px solid #588389',
        height: "38px",
        fontWeight: 600
    }
}));


const UsersTopPanel: FC<UsersTopPanelType> = ({searchAction, openCreateUpdateDialog, selectedCity, cities, setSelectedCity, showOnlyActive, setShowOnlyActive, filterUsers}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container maxWidth='lg'>
                <div className={classes.grid}>
                    <div className={classes.gridLeft}>
                        <Search placeholder="Name" searchAction={searchAction} liveSearch={false}/>
                    </div>
                    <div className={classes.gridCenter}>
                        <FormControl variant='outlined'>
                            <Select
                                labelId="sortSelect"
                                id="sort-select"
                                value={selectedCity}
                                onChange={setSelectedCity}
                                className={classes.select}
                            >
                                <MenuItem value='all' className={classes.menuItem}>City</MenuItem>
                                {cities.map(city => <MenuItem value={city} key={city}
                                                              className={classes.menuItem}>{city}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={showOnlyActive}
                                    icon={<span className={classes.checkboxIcon}><span
                                        className={classes.checkboxIconInner}/> </span>}
                                    checkedIcon={
                                        <span className={classes.checkboxIcon}><span
                                            className={classes.checkboxIconInner}>
                                              <FontAwesomeIcon icon={faCheck} className={classes.faCheck}/>
                                        </span>
                                        </span>
                                    }
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setShowOnlyActive(event.target.checked)}
                                />
                            }
                            classes={{
                                root: classes.checkbox,
                                label: classes.checkboxLabel
                            }}
                            label="Show active"
                        />
                        <Button
                            variant="outlined"
                            className={classes.filterBtn}
                            onClick={() => filterUsers()}
                        >
                          Filter
                        </Button>
                    </div>
                    <div className={classes.gridRight}>
                        <Button
                            variant="contained"
                            className={classes.btn}
                            color="primary"
                            onClick={() => openCreateUpdateDialog(true, null)}
                            startIcon={ <FontAwesomeIcon icon={faPlus} className={classes.faPlus}/>}
                        >
                            Add new contract
                        </Button>
                    </div>

                </div>
            </Container>
        </Box>
    )
};

export default UsersTopPanel;
