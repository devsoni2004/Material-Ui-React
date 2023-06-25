import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Profile = () => {
    const { appState } = useContext(AppContext);
    console.log("Profile:", appState);
    return (
        <React.Fragment>
            {appState?.user?.Username}
        </React.Fragment>
    )
}

export default Profile