import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import upi from './../assets/img/upi.png';

interface UPIProps {
    style?: React.CSSProperties;
};

export const UPI = (props: UPIProps) => {
    return (
        <IonItem style={{ border: '4px solid lightgray', borderRadius: "15px" }}>
            <IonAvatar style={props.style}>
                <img src={upi} />
            </IonAvatar>
            <IonLabel style={{ fontWeight: 'bold', paddingLeft: '10px', color: 'gray' }}> UPI</IonLabel>
        </IonItem>
    )
};
