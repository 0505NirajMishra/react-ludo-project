import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import netbank from './../assets/img/netbank.png';

interface NetBankingProps {
    style?: React.CSSProperties;
};

export const NetBanking = (props: NetBankingProps) => {
    return (
        <IonItem style={{ border: '4px solid lightgray', borderRadius: "15px" }}>
            <IonAvatar style={props.style}>
                <img src={netbank} />
            </IonAvatar>
            <IonLabel style={{ fontWeight: 'bold', paddingLeft: '10px', color: 'gray' }}> Net Banking</IonLabel>
        </IonItem>
    )
};
