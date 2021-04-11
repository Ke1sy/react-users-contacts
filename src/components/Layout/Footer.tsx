import React, {FC} from 'react';
import {Container, Link, Box, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Theme, createStyles} from '@material-ui/core/styles';
import cn from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync, faCloudUploadAlt, faStethoscope} from "@fortawesome/free-solid-svg-icons";
import {NavLinkType} from "../../types/app";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            color: "#fff",
            position: 'relative',
            fontSize: 14
        },
        footerWrap: {
            display: 'flex',
        },
        grid: {
            display: 'flex',
            height: '100%'
        },
        gridLeft: {
            width: '41.25%',
            background: 'linear-gradient(90deg, rgba(26,91,95,1) 0%, rgba(25,78,92,1) 50%, rgba(22,62,88,1) 100%)',
        },
        gridCenter: {
            width: '39.5%',
            maxWidth: '465px',
            background: 'linear-gradient(90deg, rgba(17,52,72,1) 0%, rgba(19,40,69,1) 50%, rgba(19,38,70,1) 100%)',
        },
        gridRight: {
            width: '19.25%',
            background: '#173156',
            flexGrow: 1
        },
        bgLeftUnder: {
            background: '#1b5c60',
        },
        link: {
            color: 'white',
            display: 'block',
            marginBottom: 10,
            fontSize: 14,
            textDecoration: 'underline',
            '&:hover': {
                textDecoration: 'none',
            }
        },
        footerUnder: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        footerOver: {
            position: 'relative'
        },
        gridItem: {
            padding: '15px 0',
            '&:last-of-type': {
                paddingLeft: 25
            }
        },
        copyright: {
            display: 'flex',
            marginTop: 25,
            '& a': {
                marginLeft: 15
            }
        },
        gridCenterBox: {
            padding: '0 20px',
            display: 'flex',
            alignItems: 'flex',
            fontSize: 16
        },
        gridCenterWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
            '& svg': {
                marginRight: 5
            }
        },
        divider: {
            backgroundColor: '#2b485a',
            margin: '15px 0'
        },
        iconLg: {
            height: 40,
            width: 40,
            minHeight: 40,
            minWidth: 40,
            marginRight: 28
        }
    }),
);

type FooterType = {
    navLinks: NavLinkType[]
}

const Footer: FC<FooterType> = ({navLinks}) => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Box className={classes.footerUnder}>
                <Box className={classes.grid}>
                    <Box className={cn([classes.gridLeft, classes.bgLeftUnder])}/>
                    <Box className={cn([classes.gridCenter])}/>
                    <Box className={cn([classes.gridRight])}/>
                </Box>
            </Box>

            <Box className={classes.footerOver}>
                <Container maxWidth='lg'>
                    <Box className={classes.grid}>
                        <Box className={cn([classes.gridLeft, classes.gridItem])}>
                            <Box>
                                {navLinks.map((link: NavLinkType) => (
                                    <Link
                                        component={NavLink}
                                        to={link.path}
                                        key={link.title}
                                        activeClassName={'active'}
                                        className={classes.link}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                            <Box display='flex' className={classes.copyright}>
                                <span>&#9400; 2015 Contactify</span>
                                <Link href='/' className={classes.link}>
                                    Contacts
                                </Link>
                                <Link href='/' className={classes.link}>
                                    Privacy
                                </Link>
                            </Box>
                        </Box>
                        <Box className={cn([classes.gridCenter, classes.gridItem])}>
                            <Box className={classes.gridCenterBox}>
                                <FontAwesomeIcon icon={faCloudUploadAlt} width='40' height='40'
                                                 className={classes.iconLg}/>
                                <Box className={classes.gridCenterWrap}>
                                    <Box>
                                        <Box>Last synced:</Box>
                                        <Box>2015-06-02 14:33:10</Box>
                                    </Box>
                                    <Link href='/' className={classes.link}>
                                        <FontAwesomeIcon icon={faSync} width='15' height='15'/>
                                        <Box component='span'>
                                            Force sync
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                            <Divider className={classes.divider}/>
                            <Box className={classes.gridCenterBox}>
                                <FontAwesomeIcon icon={faStethoscope} width='40' height='40'
                                                 className={classes.iconLg}/>
                                <Box>
                                    <Box>Help desk and Resolution center available:</Box>
                                    <Box> I-IV 8:00-18:00, V 8:00-16:45</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={cn([classes.gridRight, classes.gridItem])}>
                            <Link href='/' className={classes.link}>
                                Groups
                            </Link>
                            <Link href='/' className={classes.link}>
                                Frequently contacted
                            </Link>
                            <Link href='/' className={classes.link}>
                                Preferences
                            </Link>
                            <Link href='/' className={classes.link}>
                                Log out
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
