import styles from './index.module.scss';
import React from 'react';
import { IonButton, IonContent, IonPage, IonToolbar } from '@ionic/react';
import { CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Header } from '../../components';
import { useHistory } from 'react-router';
import { arrowUndoSharp } from 'ionicons/icons';
import { auth } from '../../apis';
import { setStore, storeKeys } from '../../apis/constants';

interface LoginProps { };

export const Login = (props: LoginProps) => {

    const history = useHistory();

    const [email, setEmail] = React.useState<string>("admin@ludo.com");
    const [password, setPassword] = React.useState<string>("Admin@123");
    const [isEmailError, setIsEmailError] = React.useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = React.useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState<string>("");
    const [passwordErrorMessage, setPassswordErrorMessage] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const onLogin = async (_e: any) => {
        _e.preventDefault();
        try {
            setLoading(true);
            const response: Record<string, any> = (await auth({ email, password })).data;
            console.log({ email, password, response });
            if (response.errors) {
                if (response.errors?.email) {
                    setIsEmailError(true);
                    setEmailErrorMessage(response.errors.email.join(""));
                }
                if (response.errors?.password) {
                    setIsPasswordError(true);
                    setPassswordErrorMessage(response.errors.password.join(""));
                }
            } else if (!response.status) {
                setIsEmailError(true);
                setIsPasswordError(true);
                setPassswordErrorMessage(response.message);
            } else {
                setIsEmailError(false);
                setEmailErrorMessage("");
                setIsPasswordError(false);
                setPassswordErrorMessage("");
                setStore(storeKeys.response, response.data);
                setStore(storeKeys.access_token, response.token);
                history.push('/dashboard');
            }
            setLoading(false);
        } catch (error) {
            console.error("Getting error at auth: ", error);
            setIsEmailError(true);
            setIsPasswordError(true);
            setPassswordErrorMessage("Something went wrong, please try again.");
            setLoading(false);
        }
    };

    return (
        <IonPage>
            <IonContent className={styles['login-form']} fullscreen>
                <Header icon={arrowUndoSharp} onIconClick={() => history.goBack()} />
                <form onSubmit={onLogin} className={`ion-padding `} style={{ paddingTop: '20%' }}>
                    <div className="ion-padding">
                        <Stack spacing={3} direction="column" justifyContent="center">
                            <IonToolbar>
                                <Typography variant='h5' style={{ fontWeight: "bolder", fontSize: "xx-large" }}>
                                    <FormattedMessage id="login.title" />
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bolder", color: "gray" }}>
                                    <FormattedMessage id="login.sub_title" />
                                </Typography>
                            </IonToolbar>
                            <div>
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    value={email}
                                    onChange={_e => setEmail(_e.target.value)}
                                    size="medium"
                                    fullWidth
                                    color="primary"
                                    error={isEmailError}
                                    helperText={emailErrorMessage}
                                    className={styles.emailInput}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Password"
                                    value={password}
                                    onChange={_e => setPassword(_e.target.value)}
                                    type='password'
                                    id="outlined-size-small"
                                    size="medium"
                                    fullWidth
                                    color="primary"
                                    error={isPasswordError}
                                    helperText={passwordErrorMessage}
                                    className={styles.passwordInput}
                                />
                                <Typography sx={{ textAlign: "right", fontWeight: "bold", color: "gray", padding: '0', paddingTop: ".5rem" }}>
                                    <Link to="/forgot-password" style={{ textDecoration: "none" }}><FormattedMessage id="login.forgot_password" /></Link>
                                </Typography>
                            </div>
                            <div>
                                <IonButton type="submit" className="ion-margin-top" expand="full" shape="round" size="large" fill={loading ? "outline" : "solid"} disabled={!email || !password}>
                                    {loading ? <CircularProgress color="success" /> : <FormattedMessage id="login.button_text" />}
                                </IonButton>
                                <Typography sx={{ textAlign: "left", fontWeight: "bold", color: "gray", padding: '0', paddingTop: ".5rem" }}>
                                    <FormattedMessage id="login.dont_have_account" /> <Link to="/signup" style={{ textDecoration: "none" }}><FormattedMessage id="login.signup" /></Link>
                                </Typography>
                            </div>
                        </Stack>
                    </div>
                </form>
            </IonContent >
        </IonPage >
    )
};