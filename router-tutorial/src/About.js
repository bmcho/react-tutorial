import React from 'react';
import qs from 'qs';

function About({ location }) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>소개 페이지</p>
            {detail && <p>detail값이 true!</p>}
        </div>
    );
}

export default About;