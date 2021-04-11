import {withStyles, createStyles, Theme} from '@material-ui/core/styles';

const styles = createStyles((theme: Theme) => ({
    root: {
        backgroundColor: '#1b3c43',
        boxShadow: 'none',
        padding: '0'
    },
    grow: {
        flexGrow: 1,
    },

    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        backgroundColor: '#4a6368',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        padding: 1,
        width: '100%',
        borderRadius: '19px',
        maxWidth: 224,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 15,
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d7d9ce',
        zIndex: 2,
        top: '2px',
        right: '2px',
        bottom: '2px',
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        borderLeft: "1px solid #d2d2d0",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#0ba2bd',
        },
        '& svg': {
            fill: '#504d44',
            height: 18,
            width: 18,
        }
    },
    inputRoot: {
        color: 'inherit',
        borderRadius: '19px',
        border: '1px solid #213b3c',
        backgroundColor: theme.palette.common.white,
        fontSize: "14px",
        height: "36px",
        width: 225
    },
    inputInput: {
        padding: '8px 34px 8px 13px',
        transition: theme.transitions.create('width'),
        width: '100%',
        '&::placeholder': {
            opacity: 1
        }
    },
    userMenu: {
        display: 'none',
        color: '#fff',
        fontSize: 15,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            position: 'relative',
            top: '-29px',
        },

        '& a': {
            color: '#fff',
            display: 'block',
            padding: 12,
            position: 'relative',
            borderBottom: '1px solid #0892ae'
        }
    },
    userMenuBtn: {
        background: '#0aa3c2',
        textTransform: 'none',
        color: '#fff',
        width: 187,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,

        '&:hover': {
            background: '#0aa3c2',

            '& .dropdown': {
                display: 'block'
            }
        }
    },
    userMenuDropdownContent: {
        position: 'relative',
        zIndex: 2,
    },
    userMenuDropdown: {
        borderRadius: 5,
        border: '2px solid #09819a',
        width: 210,
        display: 'none',
        background: '#0aa3c2',
        position: 'absolute',
        top: 'calc(100% + 20px)',
        right: '0',

        '&:after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            top: '-30px',
            width: '100%',
            height: 40
        },

        '&:before': {
            content: "''",
            position: "absolute",
            right: "20px",
            top: "-19px",
            border: "10px solid transparent",
            borderBottom: "10px solid #0aa3c2"
        }
    },

    centerWrap: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '27px 49px'
    },

    menuList: {
        background: 'red'
    },
    icon: {
        marginRight: 10,
        height: 18,
        width: 18,
    },
    sortIcon: {
        position: "absolute",
        right: 0,
        top: 6,
    }
}));

export default withStyles(styles, {withTheme: true});
