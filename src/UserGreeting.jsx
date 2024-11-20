import PropTypes from 'prop-types'

function UserGreeting(props)
{
    // if(props.isLoggedIn){
    //     return <h2>welcome {props.username}</h2>
    // }
    // else
    // {
    //     return <h2>please log in to continue</h2>
    // }

    // return(props.isLoggedIn ? 
    // <h2 className="welcome-msg">welcome {props.username}</h2> : 
    // <h2 className="login-prompt">please log in to continue</h2>);

    const welcomeMessage= <h2 className="welcome-msg">
        welcome {props.username}</h2>

    const login=<h2 className="login-prompt">
        please log in to continue</h2>

        return(props.isLoggedIn ? welcomeMessage:login  );






}

UserGreeting.defaultprops={
    isLoggedIn:false,
    username:"guest",

}

export default UserGreeting