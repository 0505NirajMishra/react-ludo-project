import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import gpay from './../assets/img/gpay.png';

interface GPayProps {
    style?: React.CSSProperties;
};

export const GPay = (props: GPayProps) => {
    return (
        <IonItem style={{ border: '4px solid lightgray', borderRadius: "15px" }}>
            <IonAvatar style={props.style}>
                <img src={gpay} />
            </IonAvatar>
            <IonLabel style={{ fontWeight: 'bold', paddingLeft: '10px', color: 'gray' }}> Google Pay</IonLabel>
        </IonItem>
    )
};
