import React from 'react';
import Loadable from 'react-loadable';

const Loading =() => <div></div>

export const home = Loadable({
    loader:() => import("../components/Home"),
    loading: Loading
});
export const award = Loadable({
    loader:() => import("../components/Award"),
    loading: Loading
});