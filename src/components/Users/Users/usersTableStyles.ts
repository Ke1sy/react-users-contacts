import {withStyles, createStyles, Theme} from '@material-ui/core/styles';

const styles = createStyles((theme: Theme) => ({
    wrap: {
        padding: '23px 0 40px'
    },

    table: {
        minWidth: 650,
        '.MuiTableCell-alignRight': {
            maxWidth: 135,
            boxSizing: 'border-box'
        }
    },
    tableHead: {
        '& th': {
            fontWeight: 700,
            [theme.breakpoints.down('md')]: {
                padding: '7px !important'
            },

            '&:not(:last-child)': {
                cursor: 'pointer'
            }
        }
    },
    tableCell: {
        padding: 7,
        [theme.breakpoints.up('md')]: {
            padding: '9px 15px 10px'
        },

        'tr:last-of-type &': {
            borderColor: 'transparent'
        }
    },
    actionsIcon: {
        cursor: 'pointer',
        width: "24px",
        height: "24px",
        borderRadius: "5px",
        display: "inline-block",
        textAlign: "center",
        margin: "0 3px",

        '&:hover': {
            background: "#11b6d4",
            '& svg': {
                color: '#fff',
            }
        }
    },

    tableRow: {
        '&:last-of-type': {
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            '& td:first-child': {
                borderBottomLeftRadius: 7,
            },
            '& td:last-child': {
                borderBottomRightRadius: 7,
            }
        }
    },

    activeRow: {
        backgroundColor: '#e7f6f9'
    },

    headCell: {
        padding: '18px 26px 18px 20px',
        borderLeft: '1px solid #20a3bf',
        borderRight: '1px solid #03809c',
        color: 'white',
        position: 'relative',
        '&:nth-child(1)': {
            backgroundColor: '#0186a5',
            borderLeft: 'none',
            borderTopLeftRadius: "10px",
            width: '18.5%',
            paddingLeft: 47
        },
        '&:nth-child(2)': {
            backgroundColor: '#0390ae'
        },
        '&:nth-child(3)': {
            backgroundColor: '#0899b8'
        },
        '&:nth-child(4)': {
            backgroundColor: '#0eadcb'
        },
        '&:nth-child(5)': {
            backgroundColor: '#11b6d4'
        },
        '&:nth-child(6)': {
            backgroundColor: '#15c0de',
            borderRight: 'none',
            borderTopRightRadius: "10px"
        },
    },
    paper: {
        borderRadius: "10px"
    },

    eyeIcon: {
        marginRight: 17
    },

    arrowIcon: {
        position: 'absolute',
        right: 8,
        top: 22
    },

    grid: {
        display: 'flex'
    },

    gridLeft: {
        width: 227,
        marginRight: 15
    },

    gridRight: {
        flexGrow: 1
    },
    avatar: {
        width: 200,
        height: 200,
        fontSize: 65,
        border: '5px solid #d8d8ce',
        boxSizing: 'border-box',
        backgroundColor: '#0ba2bd',
        marginBottom: 10,
    },
    userInfo: {
        height: '100%',
        boxSizing: 'border-box',
        padding: 13,
        '& a': {
            color: '#0095bc',
            textDecoration: 'underline',
            '&:hover': {
                color: '#0095bc',
                textDecoration: 'none',
            }
        }
    },
    userInfoItem: {
        display: 'flex',
        fontSize: 14,
        marginBottom: 10,
    },
    userInfoLabel: {
        color: '#949494',
        width: 75,
        paddingRight: 10,
        textAlign: 'right',
        boxSizing: 'border-box',
    }
}));

export default withStyles(styles, {withTheme: true})
