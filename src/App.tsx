import React from 'react';
import {Header, Main} from './components/Layout';
import RM from './RouterManager';
import {Switch, Route, Redirect} from "react-router-dom";
import withSuspense from "./components/Suspense/Suspense";
import Footer from "./components/Layout/Footer";
import {NavLinkType} from "./types/app";

const NAV_LINKS: NavLinkType[] = [
    {
        title: 'Dashboard',
        path: RM.dashboard.path
    }, {
        title: 'Contacts',
        path: RM.users.path
    }, {
        title: 'Notifications',
        path: RM.notifications.path
    },
];

const App = () => {
    return (
        <>
            <Header navLinks={NAV_LINKS}/>
            <Main>
                <Switch>
                    {Object.entries(RM).map(([key, route]) => {
                        const {path, exact = false, redirect = null, component: Cmp} = route;
                        const redirectPath = redirect ? redirect(true) : '';
                        const RouteComponent = redirect ? <Redirect to={redirectPath}/> : withSuspense(Cmp);

                        return (
                            <Route
                                key={key}
                                path={path}
                                exact={exact}
                            >
                                {RouteComponent}
                            </Route>
                        )
                    })}
                </Switch>
            </Main>
            <Footer navLinks={NAV_LINKS}/>
        </>
    );
};

export default App;
