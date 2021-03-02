import React from 'react';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import LoaderModal from '../components/LoaderModal'

import { useAuth } from '../hooks/auth'

const Routes = () => {
    const { user } = useAuth();

    return user ? (
        <>
            <AppRoutes />
            <LoaderModal />
        </>
    ) : (
            <>
                <AuthRoutes />
                <LoaderModal />
            </>
        );
}

export default Routes;
