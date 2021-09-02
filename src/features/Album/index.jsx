import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Kpop Best',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/0/6/f/c06f4a09a602da5e080de99e148f5781.jpg',
        },
        {
            id: 2,
            name: 'Top Electronic/Dance Best',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
        },
        {
            id: 3,
            name: 'Indie US-UK Hits',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/7/7/2d777f871c5a466ad6bbeebc00239e1c.jpg',
        },
    ];

    return (
        <div>
            <h2>My Album</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;