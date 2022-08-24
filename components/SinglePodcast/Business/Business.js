import { Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Business.module.scss'
import { PrimaryButton } from '../../Button/Button'
import Image from 'next/image'

const Business = () => {
    return (
        <div className={styles.business_container}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <div className={styles.business_image_container}>
                        <Image src="/images/podcast_business.png" width={616} height={400} objectFit="contain" alt="podcast business men picture" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={styles.business_content_container}>
                        <span>Business</span>
                        <Typography variant="h2">Ep 2: Getting the first 100 customers for your business</Typography>
                        <Typography variant="body1">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon</Typography>
                        <div className={styles.btn_container}>
                            <PrimaryButton><small>Listen now</small> <small className={styles.music_text}>52:32</small></PrimaryButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Business