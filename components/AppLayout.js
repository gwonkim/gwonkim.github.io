import React from 'react';
import propTypes from 'prop-types';
import Nav from './study/Nav';

const AppLayout = ({ children }) => {
    return( 
        <>
        <div>
            { children }
        </div>
        </>
    );
};

AppLayout.propTypes = {
    children: propTypes.node.isRequired
};

export default AppLayout;
