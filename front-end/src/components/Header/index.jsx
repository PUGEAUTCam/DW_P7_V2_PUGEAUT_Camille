import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { ContainerHeader, Logo, NavBar } from './style';
import { useSelector } from 'react-redux';
import { AvatarImg, IconAvatar } from '../StyleDefinition/picture';


const Header = () => {
    const userStore = useSelector((state) => state.userStore);

    return (
        <ContainerHeader>
            <Link to="/">
                <Logo
                    src="./icon-left-font-monochrome-white.svg"
                    alt="Groupomania-logo"
                />
            </Link>

            <NavBar>

                <IconAvatar style={{ marginRight: 13 }}>
                    <SearchIcon sx={{ fontSize: 34, color: 'white', display: "flex" }} />
                </IconAvatar>

                <IconAvatar style={{ marginRight: 13 }}>
                    <Link to="/postsLiked">
                        <FavoriteBorderIcon sx={{ fontSize: 34, color: 'white', display: "flex" }} />
                    </Link>
                </IconAvatar>

                <IconAvatar>
                    <Link to="/profile">
                        <AvatarImg
                            src={userStore.user.avatar}
                            alt={`avatar de profil de ${userStore.user.firstname} `}
                        />
                    </Link>
                </IconAvatar>
            </NavBar>

        </ContainerHeader>
    );
};

export default Header;