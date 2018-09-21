import React from 'react';
import HomePage from './pages/Home/HomePage';
import NotFound from './pages/NotFound/NotFound';
import AdminPages from './pages/Admin/admin';
import UserPages from './pages/User/user';
import AddProducts from './components/AdminView/AddProducts';
import CartOfUser from './components/UserView/CartOfUser';
import LoginPages from './pages/Login/LoginPages';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/admin-view',
        exact : false,
        main : () => <AdminPages />
    },
    {
        path : '/user-view',
        exact : false,
        main : () => <UserPages />
    },
    {
        path :'/admin/add-products',
        exact : false,
        main : ({history}) => <AddProducts history={history}/>
    },
    {
        path: '/admin/:id/edit-products',
        exact: false,
        main: ({match, history}) => <AddProducts match={match} history={history}/>
    },
    {
        path: '/user/cart',
        exact: false,
        main: ({history}) => <CartOfUser history={history}/>
    },
    {
        path : '/login',
        exact : false,
        main : () => <LoginPages />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
    
];

export default routes;