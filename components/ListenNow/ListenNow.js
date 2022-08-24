import React from 'react';
import styles from './ListenNow.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image'

const ListenNow = () => {
    return (
        <div className={styles.subscribe_container}>
            <Typography variant="h4">Listen on</Typography>
            <Image
                src="/images/apple_podcast.png"
                width={182}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
            />{" "}
            <Image
                src="/images/google_podcast.png"
                width={182}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
            />{" "}
            <Image
                src="/images/sound_podcast.png"
                width={165}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
            />{" "}
            <Image
                src="/images/shopify.png"
                width={127}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
            />
        </div>
    )
}

export default ListenNow