import './index.scss';
import React from 'react';
import { IonIcon, IonLabel, IonMenuButton, IonTitle } from '@ionic/react';
import { menu as menuIcon } from 'ionicons/icons';

interface HeaderProps {
    title?: string;
    icon?: any;
    rightAlignIcon?: React.ReactNode;
    rightAlignIconOnClick?: () => any;
    onIconClick?: () => any;
    children?: React.ReactNode;
    isMenu?: boolean;
};

export const Header = (props: HeaderProps) => {
    return (
        <>
            <IonTitle className={"headerTitle"}>
                <IonLabel style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {props.isMenu ? 
                        <IonMenuButton slot='start' title="Login" style={{ float: 'left' }}>
                            <IonIcon className="menuIcon" icon={menuIcon} />
                        </IonMenuButton> : undefined}
                        {props.icon && <IonIcon
                            onClick={props.onIconClick}
                            icon={props.icon}
                            className="color-primary"
                            style={{ fontSize: 'xx-large', verticalAlign: 'middle' }}
                        />}
                        <span style={{ textAlign: 'center', fontWeight: 'bold' }}>{props.title}</span>
                    </div>
                    <div onClick={props.rightAlignIconOnClick}>{props.rightAlignIcon}</div>
                </IonLabel>
                {props.children}
            </IonTitle>

            
        </>
    );
};