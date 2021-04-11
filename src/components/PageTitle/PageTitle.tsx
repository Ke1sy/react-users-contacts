import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '40px 0',
        position: 'relative',
        color: theme.palette.common.white
    },
}));

type PageTitleType = {
    text: string
}

const PageTitle: FC<PageTitleType> = ({text}) => {
    const classes = useStyles();

    return (
        <Typography variant="h2" className={classes.root}>
            {text}
        </Typography>
    )
};

export default PageTitle;
