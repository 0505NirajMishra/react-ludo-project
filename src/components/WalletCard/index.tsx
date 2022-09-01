import classes from './index.module.scss';
import { IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import money from './../../assets/img/money.svg';
import { Box, Typography } from '@mui/material';

interface WalletCardProps {
    buttonTitle?: string;
    amount?: number;
    subheading?: string;
    description?: string;
};

export const WalletCard = (props: WalletCardProps) => {
    return (
        <IonCard className={classes.ionCard}>
            <IonCardContent className={classes["ion-card-content"]}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <IonLabel className={classes.amount}>
                        <IonIcon style={{ width: "2rem", height: "2rem" }} src={money} />
                        {props.amount}
                    </IonLabel>
                    <IonButton color="light" shape="round" size="small" fill="outline">{props.buttonTitle}</IonButton>
                </Box>
                <IonLabel style={{ paddingLeft: "2rem", fontSize: "1.2rem" }}>
                    {props.subheading}
                </IonLabel>

                <Typography variant="h5" sx={{ paddingTop: '4rem', paddingLeft: '1rem' }}>
                    <IonLabel>
                        {props.description}
                    </IonLabel>
                </Typography>
            </IonCardContent>
        </IonCard>
    )
}
