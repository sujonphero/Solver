import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        // <div style={{
        //     backgroundColor: match ? 'blue' : 'transparent',
        //     borderRadius: '20px',
        // }}>
        <Link
            style={{
                backgroundColor: match ? '#1479FF' : 'transparent',
                color: match ? 'white' : '#1479FF',
                borderRadius: match ? '50px' : 0,
                pointerEvents: match ? 'none' : ''
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
        // </div >
    );
}

export default CustomLink;
