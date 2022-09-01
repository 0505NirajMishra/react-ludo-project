import { IonCard, IonCardContent, IonItem } from '@ionic/react';
import React from 'react';

interface ImageCardProps {
    link?: string;
    style?: React.CSSProperties
};

export const ImageCard = (props: ImageCardProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '.5rem', paddingBottom: '.5rem', ...props.style, width: '100%' }}>
            <img src={props.link} width={props.style?.width ?? '70%'} height={props.style?.height ?? 'auto'} style={{ borderRadius: props.style?.borderRadius ?? "15px" }} />
        </div>
    )
}
