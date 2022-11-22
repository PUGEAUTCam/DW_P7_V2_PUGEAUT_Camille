import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { ContainerHeader, IconHeader } from './style';
import { useSelector } from 'react-redux';


const Header = () => {
    const userStore = useSelector((state) => state.userStore);

    return (
        <ContainerHeader>
            <Link to="/">
                <img
                    src="./icon-left-font-monochrome-black.svg"
                    alt="Groupomania-logo"
                    style={{ width: '287px', paddingTop: '10px' }}
                />
            </Link>

            <div style={{ display: 'flex' }}>
                <IconHeader>
                    <Link to="/postsLiked">
                        <FavoriteBorderIcon sx={{ fontSize: 30, color: 'black' }} />
                    </Link>
                </IconHeader>

                <IconHeader>
                    <Link to="/profile">
                        <img
                            src={userStore.user.avatar}
                            alt={`avatar de profil de ${userStore.user.firstname} `}
                            style={{ height: '90px' }}
                        />
                    </Link>
                </IconHeader>
            </div>

        </ContainerHeader>
    );
};

export default Header;