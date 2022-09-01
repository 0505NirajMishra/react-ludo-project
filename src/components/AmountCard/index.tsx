import classes from './index.module.scss';
import { Box } from '@mui/material'
import React from 'react'
import { IonLabel } from '@ionic/react';

interface AmountCardProps {
    amount: number;
    onClick?: (amount: number) => any
};

export const AmountCard = (props: AmountCardProps) => {
    return (
        <Box className={classes.amountCard} onClick={() => { return props.onClick ? props.onClick(props.amount) : undefined }}>
            <IonLabel>
                Rs.<span>{props.amount}</span>
            </IonLabel>
        </Box>
    )
}
