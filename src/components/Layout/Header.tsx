import React, {FC} from 'react';
import {
    AppBar,
    Hidden,
    Toolbar,
    InputBase,
    Link,
    Container, WithStyles,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Navigation from "../Navigation/Navigation";
import RM from "../../RouterManager";
import MobileNavigation from "../Navigation/MobileNavigation";
import {Theme, createStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import logoImg from '../../assets/images/logo.png';
import {NavLinkType} from "../../types/app";
import cn from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faSortDown, faUsers, faComments, faWrench, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import withHeaderStyles from "./headerStyles";

interface IHeaderType extends WithStyles {
    navLinks: NavLinkType[]
}

const Header: FC<IHeaderType> = ({navLinks, classes}) => {
    return (
        <AppBar position="static" className={classes.root}>
            <Container maxWidth='lg'>
                <Hidden xsDown>
                    <Toolbar disableGutters={true}>
                        <div className={classes.logo}>
                            <Link href={RM.home.path}>
                                <img src={logoImg} alt=""/>
                            </Link>
                        </div>
                        <div className={classes.centerWrap}>
                            <Navigation navLinks={navLinks}/>
                            <div className={classes.search}>
                                <InputBase
                                    placeholder="Search"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                />
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                            </div>
                        </div>

                        <div className={classes.userMenu}>
                            <div
                                color="inherit"
                                className={classes.userMenuBtn}
                            >
                                <FontAwesomeIcon icon={faUser} className={classes.icon}/>

                                Jorah Marmount
                                <FontAwesomeIcon icon={faSortDown} className={cn(classes.icon, classes.sortIcon)}/>

                                <div className={cn(classes.userMenuDropdown, 'dropdown')}>
                                    <div className={classes.userMenuDropdownContent}>
                                        <Link href='/'>
                                            <FontAwesomeIcon icon={faUsers} className={classes.icon}/>
                                            Groups
                                        </Link>
                                        <Link href='/'>
                                            <FontAwesomeIcon icon={faComments} className={classes.icon}/>
                                            Frequently contacted</Link>
                                        <Link href='/'>
                                            <FontAwesomeIcon icon={faWrench} className={classes.icon}/>
                                            Preferences
                                        </Link>
                                        <Link href='/'>
                                            <FontAwesomeIcon icon={faPowerOff} className={classes.icon}/>
                                            Log out
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Toolbar>
                </Hidden>
                <Hidden smUp>
                    <MobileNavigation navLinks={navLinks}/>
                </Hidden>
            </Container>
        </AppBar>
    );
};

export default withHeaderStyles(Header);
