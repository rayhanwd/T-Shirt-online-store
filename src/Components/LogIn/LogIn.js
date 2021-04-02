import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './../../firebase.config/Firebase';
import { UserContext } from './../../App';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    message:{
        textAlign: 'center',
        marginTop:'50px',
    },
    logInCard: {
      maxWidth: 400,
      backgroundColor: '#3f51b5',
      marginTop:'100px',
      margin: 'auto',
      padding: '30px',
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      color:'#ffff',
    },
    SignButton:{
        margin: 'auto',
        color:'#ffff',
    },
  });
const LogIn = () => {
    const classes = useStyles();
    const [logInUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();

    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSigning = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { email, displayName } = result.user;
                const signInUser = { name: displayName, email };
                setLogInUser(signInUser);
                storeAuthToken();

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

            });
    }

    const handleSignOut = () => {
        return firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                return signedOutUser;
            }).catch(err => {
                // An error happened.
            });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {

            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function (error) {

        });
    }
    const { name } = logInUser;
    return (
        <div>
            {name ? <Typography variant="h6" color="textSecondary" className={classes.message}>You are logged.Please wait for redirect your page automatically</Typography> : <>
            <Card className={classes.logInCard}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Log In
                    </Typography>
                    <CardActions>
        <Button className={classes.SignButton} onClick={handleGoogleSigning} size="small">sign in Google</Button>
      </CardActions>
                </CardContent>
            </Card></>}
        </div>
    );
};

export default LogIn;