import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../components/store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {
  state = {
      email: '',
      password: ''
  }
  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state);
      this.props.signIn(this.state);
  }
  render() {
    const { authError,auth } = this.props;
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-fiedl">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </div>
            </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispacthToProps = (dispatch) => {
    //console.log(state);
    
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps,mapDispacthToProps)(SignIn);