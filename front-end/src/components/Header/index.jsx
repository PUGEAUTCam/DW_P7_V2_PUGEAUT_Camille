import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SleddingIcon from '@mui/icons-material/Sledding';
import { Link } from 'react-router-dom';
import { ContainerHeader, IconHeader } from './style';



const Header = () => {

    return (
        <ContainerHeader>
            <Link to="/"><img src="./icon-left-font-monochrome-black.svg" alt="Groupomania-logo" style={{ width: '287px', paddingTop: '10px' }} /></Link>
            <div style={{ display: 'flex' }}>
                <IconHeader>
                    <Link to="/postsLiked"><FavoriteBorderIcon sx={{ fontSize: 30, color: 'black' }} /></Link>
                </IconHeader>
                <IconHeader>
                    <Link to="/profile"><SleddingIcon sx={{ fontSize: 30, color: 'black' }} /></Link>
                </IconHeader>
            </div>
        </ContainerHeader>
    );
};

export default Header;