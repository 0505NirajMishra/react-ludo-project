import './index.scss';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { LoggedInHeader } from '../../components';
import { useHistory } from 'react-router';
import { Box, Typography } from '@mui/material';
import notransactionhistory from './../../assets/img/notransactionhistory.png';

export const TransactionHistory = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <Box className="ion-padding centerimg">
                    <img src={notransactionhistory} />
                </Box>
                <div className="nogames">
                    <Typography variant="h5">No transactions yet!</Typography>
                    <Typography>Seems like you haven’t done any activity yet</Typography>
                </div>
            </IonContent>
        </IonPage>
    )
}