import './index.scss';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { LoggedInHeader } from '../../components';
import { useHistory } from 'react-router';
import { Box, Typography } from '@mui/material';
import nonotification from './../../assets/img/nonotification.png';

export const Notification = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <Box className="ion-padding centerimg">
                    <img src={nonotification} />
                </Box>
            </IonContent>
        </IonPage>
    )
}