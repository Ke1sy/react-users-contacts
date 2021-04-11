import React, {FC} from 'react';
import errorImg from '../../assets/images/404.png';
import {Container, WithStyles} from "@material-ui/core";
import withNotFoundStyles from "./notFoundStyles";

const NotFound: FC<WithStyles> = ({classes}) => {
    return (
        <div className={classes.notFound}>
            <Container maxWidth='lg'>
                <img src={errorImg} alt=""/>
            </Container>
        </div>
    )
};

export default withNotFoundStyles(NotFound);
