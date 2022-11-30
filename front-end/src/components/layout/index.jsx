import React from 'react';
import MainHeader from '../../components/Header';
import { ContainerChildren } from './style';

const Layout = (props) => {

    const Header = props?.header || MainHeader

    return (
        <div>
            <Header />
            <ContainerChildren>
                {props.children}
            </ContainerChildren>
        </div>
    );
};

export default Layout;