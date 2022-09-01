import classes from './index.module.scss';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { LoggedInHeader, WalletCard } from '../../components';
import { Stack } from '@mui/material';

interface WalletProps { };

export const Wallet = (props: WalletProps) => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <div style={{ paddingTop: '2rem' }}>
                    <WalletCard
                        buttonTitle={"Deposit Cash"}
                        subheading={"Deposit Cash"}
                        amount={85.5} description="This can be used for deposit."
                    />
                    <WalletCard
                        buttonTitle={"Withdraw Cash"}
                        subheading={"Withdraw Cash"}
                        amount={80.5} description="This can be used for withdraw."
                    />
                </div>
            </IonContent>
        </IonPage>
    )
}
