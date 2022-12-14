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
                <Link to="/search">
                    <IconAvatar style={{ marginRight: 13, cursor: "pointer" }}>
                        <SearchIcon sx={{ fontSize: { xs: 24, lg: 32 }, color: 'white', display: "flex", "&:hover": { color: "#d6d6d6" } }} />
                    </IconAvatar>
                </Link>

                <Link to="/postsLiked">
                    <IconAvatar style={{ marginRight: 13 }}>
                        <FavoriteBorderIcon sx={{ fontSize: { xs: 24, lg: 32 }, color: 'white', display: "flex", "&:hover": { color: "#d6d6d6" } }} />
                    </IconAvatar>
                </Link>

                <Link to="/profile">
                    <IconAvatar style={{ background: "white" }}>
                        <AvatarImg
                            src={userStore.user.avatar}
                            alt={`avatar de profil de ${userStore.user.firstname} `}
                        />
                    </IconAvatar>
                </Link>
            </NavBar>

        </ContainerHeader>
    );
};

export default Header;