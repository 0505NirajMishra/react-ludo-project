import './index.scss';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { LoggedInHeader } from '../../components';
import { useHistory } from 'react-router';
import { Box, Typography } from '@mui/material';
import nogames from './../../assets/img/nogamehistory.png';

export const GameHistory = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <Box className="ion-padding centerimg">
                    <img src={nogames} />
                </Box>
                <div className="nogames">
                    <Typography variant="h5">No Games Played yet!</Typography>
                    <Typography>Seems like you haven’t played any game yet, play now to win!</Typography>
                </div>
            </IonContent>
        </IonPage>
    )
}