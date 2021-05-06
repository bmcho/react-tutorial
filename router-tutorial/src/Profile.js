import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData ={
    velopert: {
        name: '개발자',
        description: 'Foronted Engineer'
    },
    homer: {
        name: 'homer simson',
        description: '심슨가족 주인공'
    }
}

function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if(!profile) {
        return <div>존재하지 않은 사용자</div>
    }

    return(
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample></WithRouterSample>
        </div>
    );
}

export default Profile;