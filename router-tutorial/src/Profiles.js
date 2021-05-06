import React from 'react';
import Profile from './Profile';
import { Link, Route, NavLink } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles() {
    return(
        <div>
            <h3>사용자 목록</h3>
            <ul>
                {/* <li><Link to="/profiles/velopert">velopert</Link></li>
                <li><Link to="/profiles/homer">homer</Link></li> */}
                <li><NavLink to="/profiles/velopert" activeStyle={{
                    background: 'black',
                    color: 'white'
                }}>velopert</NavLink></li>
                <li><NavLink to="/profiles/homer" activeStyle={}>homer</NavLink></li>
            </ul>

            <Route 
                path="/profiles" 
                exact 
                render={() => <div>사용자를 선택해주세요</div>} />
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
}

export default Profiles;