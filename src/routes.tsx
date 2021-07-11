import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from './components/loading';

const LandingPage = lazy(() => import('./pages/landingPage'));
const Error = lazy(() => import('./components/error'));

export default function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={LandingPage} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}
