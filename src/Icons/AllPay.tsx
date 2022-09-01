import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import otherpay from './../assets/img/otherpay.png';

interface AllPayProps {
    style?: React.CSSProperties;
};

export const AllPay = (props: AllPayProps) => {
    return (
        <IonItem style={{ border: '4px solid lightgray', borderRadius: "15px" }}>
            <IonAvatar style={props.style}>
                <img src={otherpay} />
            </IonAvatar>
            <IonLabel style={{ fontWeight: 'bold', paddingLeft: '10px', color: 'gray' }}> Other Wallets</IonLabel>
        </IonItem>
    )
};
