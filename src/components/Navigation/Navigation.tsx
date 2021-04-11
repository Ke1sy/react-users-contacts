import React, {FC} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Box, Link} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {NavLinkType} from "../../types/app";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            color: theme.palette.common.white,
            backgroundColor: '#0ba2bd',
            padding: '2px',
            borderRadius: '19px'
        },
        link: {
            textDecoration: 'none',
            padding: '6px 33px',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: 14,
            '&.active': {
                pointerEvents: 'none',
                backgroundColor: '#198592',
                border: '1px solid #146a77'
            },

            '&:first-of-type.active': {
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px"
            },

            '&:last-of-type.active': {
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px"
            }
        },
    }),
);

type NavigationType = {
    navLinks: NavLinkType[]
}

const Navigation: FC<NavigationType> = ({navLinks}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {navLinks.map((link: NavLinkType) => (
                <Link
                    component={NavLink}
                    to={link.path}
                    key={link.title}
                    color="inherit"
                    variant="body2"
                    activeClassName={'active'}
                    className={classes.link}
                >
                    {link.title}
                </Link>
            ))}

        </Box>
    );
};

export default Navigation;
