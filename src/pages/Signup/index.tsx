import styles from './index.module.scss';
import React from 'react';
import { IonButton, IonContent, IonPage, IonToolbar } from '@ionic/react';
import { Header } from '../../components';
import { CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { arrowUndoSharp } from 'ionicons/icons'
import { register } from '../../apis';
import { setStore, storeKeys } from '../../apis/constants';

interface SignupProps { };

export const Signup = (props: SignupProps) => {

    const history = useHistory();

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [isNameError, setIsNameError] = React.useState<boolean>(false);
    const [isEmailError, setIsEmailError] = React.useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = React.useState<boolean>(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState<string>("");
    const [emailErrorMessage, setEmailErrorMessage] = React.useState<string>("");
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const onRegister = async (_e: any) => {
        _e.preventDefault();
        try {
            setLoading(true);
            const response: Record<string, any> = (await register({ email, password, name })).data;
            console.log({ email, password, response });
            if (response.errors) {
                if (response.errors?.name) {
                    setIsNameError(true);
                    setNameErrorMessage(response.errors.name.join(""));
                }
                if (response.errors?.email) {
                    setIsEmailError(true);
                    setEmailErrorMessage(response.errors.email.join(""));
                }
                if (response.errors?.password) {
                    setIsPasswordError(true);
                    setPasswordErrorMessage(response.errors.password.join(""));
                }
            } else if (!response.status) {
                setIsNameError(true);
                setIsEmailError(true);
                setIsPasswordError(true);
                setPasswordErrorMessage(response.message);
            } else {
                setIsEmailError(false);
                setEmailErrorMessage("");
                setIsPasswordError(false);
                setPasswordErrorMessage("");
                setIsNameError(false);
                setEmailErrorMessage("");
                setStore(storeKeys.response, response.data);
                setStore(storeKeys.access_token, response.token);
                history.push('/dashboard');
            }
            setLoading(false);
        } catch (error) {
            console.error("Getting error at auth: ", error);
            setLoading(true);
        }
    };

    return (
        <IonPage>
            <IonContent className={styles['login-form']} fullscreen>
                <Header icon={arrowUndoSharp} onIconClick={() => history.goBack()} />
                <form onSubmit={onRegister} className={`ion-padding `} style={{ paddingTop: '10%' }}>
                    <div className="ion-padding">
                        <Stack spacing={3} direction="column" justifyContent="center">
                            <IonToolbar>
                                <Typography variant='h5' style={{ fontWeight: "bolder", fontSize: "xx-large" }}>
                                    <FormattedMessage id="signup.title" />
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bolder", color: "gray" }}>
                                    <FormattedMessage id="signup.sub_title" />
                                </Typography>
                            </IonToolbar>
                            <div>
                                <TextField
                                    label="Username"
                                    type="name"
                                    id="outlined-size-small"
                                    size="medium"
                                    fullWidth
                                    color="primary"
                                    value={name}
                                    onChange={_e => setName(_e.target.value)}
                                    error={isNameError}
                                    helperText={nameErrorMessage}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Email"
                                    type="email"
                                    id="outlined-size-small"
                                    size="medium"
                                    fullWidth
                                    value={email}
                                    onChange={_e => setEmail(_e.target.value)}
                                    color="primary"
                                    error={isEmailError}
                                    helperText={emailErrorMessage}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Password"
                                    type='password'
                                    id="outlined-size-small"
                                    size="medium"
                                    fullWidth
                                    value={password}
                                    onChange={_e => setPassword(_e.target.value)}
                                    color="primary"
                                    error={isPasswordError}
                                    helperText={passwordErrorMessage}
                                />
                                <Typography sx={{ textAlign: "left", fontWeight: "bold", color: "gray", padding: '0', paddingTop: ".5rem" }}>
                                    <FormattedMessage id="signup.declaration" />
                                    <Link to="/terms-policies" style={{ textDecoration: "none" }}>
                                        <FormattedMessage id="signup.terms_conditions" />
                                    </Link>
                                    <FormattedMessage id="signup.declaration_conjuction" />
                                    <Link to="/terms-policies" style={{ textDecoration: "none" }}>
                                        <FormattedMessage id="signup.privacy_policy" />
                                    </Link>
                                </Typography>
                            </div>
                            <div>
                                <IonButton type="submit" className="ion-margin-top" expand="full" fill={loading ? "outline" : "solid"} shape="round" size="large" disabled={!name || !email || !password}>
                                    {loading ? <CircularProgress color="success" /> : <FormattedMessage id="signup.button_text" />}
                                </IonButton>
                                <Typography sx={{ textAlign: "left", fontWeight: "bold", color: "gray", padding: '0', paddingTop: ".5rem" }}>
                                    <FormattedMessage id="signup.already_have_account" /> <Link to="/login" style={{ textDecoration: "none" }}><FormattedMessage id="signup.signin" /></Link>
                                </Typography>
                            </div>
                        </Stack>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    )
};