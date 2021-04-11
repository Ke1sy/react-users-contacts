import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(135deg, rgba(32,127,121,1) 0%, rgba(29,80,111,1) 50%, rgba(28,60,107,1) 100%)',
        paddingBottom: theme.spacing(4),
    }
}));

interface IMain {
    children: any
}

const Main: FC<IMain> = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
};

export default Main

