import classes from './index.module.scss';
import { IonAvatar, IonIcon } from '@ionic/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import money from './../../assets/img/money.svg';
import male from './../../assets/img/male.png';
import female from './../../assets/img/female.png';
import battle from './../../assets/img/energy.png';

interface BattleCardProps {
    username1?: string;
    username2?: string;
    amount?: number;
    onClick?: Function;
};

export const BattleCard = (props: BattleCardProps) => {
    return (
        <Box onClick={(_e: any) => props.onClick ? props.onClick(_e) : undefined} sx={{
            borderRadius: '15px',
            margin: '.5rem',
            backgroundColor: '#f7f7f7',
        }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'gray', paddingLeft: '1rem' }}>
                Playing for <IonIcon style={{ width: "3rem", height: "3rem", verticalAlign: "middle" }} src={money} /> <span style={{ fontSize: 'large', color: 'darkred' }}>{props.amount}</span>
            </Typography>
            <Box className={classes.battle} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{ width: '20%' }}>
                    <div className={`${classes.avatar} ${classes.border}`}>
                        <img src={male} />
                    </div>
                    <span className={classes.bat}>{props.username1}</span>
                </div>
                <div style={{ width: '20%' }}>
                    <div className={classes.avatar}>
                        <img src={battle} />
                    </div>
                </div>
                <div style={{ width: '20%' }}>
                    <div className={`${classes.avatar} ${classes.border}`}>
                        <img src={female} />
                    </div>
                    <span className={classes.bat}>{props.username2}</span>
                </div>
            </Box>
        </Box>
    )
}
