import React from 'react';
import { Link } from 'react-router-dom'
import  SignedinLinks  from './SignedinLinks'
import  SignedoutLinks  from './SignedoutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
    const Links = auth.uid ? <SignedinLinks profile={profile} /> : <SignedoutLinks />;
    return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Golpo Solpo</Link>
                    { Links }
                </div>
            </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
        
    }
}

export default connect(mapStateToProps)(Navbar);