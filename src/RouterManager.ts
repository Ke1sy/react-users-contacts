import React, {ComponentType} from "react";

const Notifications = React.lazy(() => import(/* webpackChunkName: "Notifications Page" */"./components/Notifications/Notifications"));
const Users = React.lazy(() => import(/* webpackChunkName: "Users Page" */"./components/Users/UsersContainer"));
const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard Page" */"./components/Dashboard/Dashboard"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */"./components/NotFound/NotFound"));

type RouteValueType = {
    path: string,
    redirect?: (hasRedirect: boolean) => string,
    component?: ComponentType,
    getPath?: any
    exact?: boolean
}

type RouteType = {
    [key: string]: RouteValueType
};

const RM: RouteType = {
    home: {
        path: '/',
        exact: true,
        redirect: () => {
            return `/users`
        },
    },

    notifications: {
        path: '/notifications',
        component: Notifications,
        exact: true,
    },


    users: {
        path: '/users',
        exact: true,
        component: Users,
    },

    dashboard: {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
    },

    notFound: {
        path: '*',
        exact: false,
        component: NotFound,
    },
};

export default RM;
