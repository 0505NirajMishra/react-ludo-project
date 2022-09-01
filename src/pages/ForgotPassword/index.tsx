import classes from './index.module.scss';
import React from 'react';
import { IonButton, IonContent, IonFooter, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { Stack, TextField, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Header } from '../../components';
import { useHistory } from 'react-router';
import { arrowUndoSharp } from 'ionicons/icons';

export const ForgotPassword = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent className={classes['login-form']} fullscreen>
                <Header icon={arrowUndoSharp} onIconClick={() => history.goBack()} />
                <form className={`ion-padding `} style={{ paddingTop: '10%' }}>
                    <div className="ion-padding">
                        <Stack spacing={3} direction="column" justifyContent="center">
                            <IonToolbar>
                                <Typography variant='h5' style={{ fontWeight: "bolder", fontSize: "xx-large" }}>
                                    <FormattedMessage id="forgot_password.title" />
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bolder", color: "gray" }}>
                                    <FormattedMessage id="forgot_password.sub_title" />
                                </Typography>
                            </IonToolbar>
                            <div>
                                <TextField label="Email" type="email" id="outlined-size-small" size="medium" fullWidth color="primary" />
                            </div>
                            <div>
                                <IonButton className="ion-margin-top" expand="full" shape="round" size="large">
                                    <FormattedMessage id="forgot_password.button_text" />
                                </IonButton>

                            </div>
                        </Stack>
                    </div>
                </form>
            </IonContent>
            <IonFooter>
                <Typography sx={{ textAlign: "center", fontWeight: "bold", color: "gray", padding: '0', paddingBottom: "3rem" }}>
                    <FormattedMessage id="forgot_password.declaration" />
                </Typography>
            </IonFooter>
        </IonPage>
    )
}
