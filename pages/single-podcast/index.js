import React from 'react';
import styles from '../../styles/single-podcast.module.scss';
import BasicLayout from '../../layout/BasicLayout/BasicLayout'
import Business from '../../components/SinglePodcast/Business/Business';
import MakerContent from '../../components/SinglePodcast/MakerContent/MakerContent';
import RecentEpisodes from '../../components/RecentEpisodes/RecentEpisodes';

const SinglePodcast = () => {
    return (
        <div className={styles.single_podcast_container}>
            <BasicLayout>
                <Business />
                <MakerContent />
                <RecentEpisodes />
            </BasicLayout>
        </div>
    )
}

export default SinglePodcast