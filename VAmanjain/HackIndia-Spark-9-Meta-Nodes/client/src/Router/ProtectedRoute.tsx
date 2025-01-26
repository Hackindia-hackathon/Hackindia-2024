// import React from 'react'
// import { Outlet } from 'react-router-dom'

// interface ProtectedProps {
//     allowedRole: string | null;
//   }

// const ProtectedRoute:React.FC<ProtectedProps> = ({allowedRole}) => {
//   return (
//     <div>
//         <Outlet/>
//     </div>
//   )
// }

// export default ProtectedRoute

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface ProtectedProps {
    allowedRole: string | null;
    // userRole: string | null; // Assume you have a way to get the current user's role
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ allowedRole }) => {
    // Check if the user's role matches the allowed role
    // const isAuthorized = allowedRole === userRole;

    return (
        <div>
            {allowedRole ? (
                <Outlet />
            ) : (
                <Navigate to="/unauthorized" replace /> // Redirect to an unauthorized page or login
            )}
        </div>
    );
}

export default ProtectedRoute;