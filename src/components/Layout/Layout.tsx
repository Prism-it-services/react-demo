import { LayoutContainer, LayoutContainerNew } from "./styles";
import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import { Footer } from "../Footer/Footer";


interface LayoutProps {
    children: ReactNode;
  }

export const Layout: React.FC<LayoutProps> = ( {children}) => {

    return (

        <LayoutContainer>
    <Header/>
    <main>{children}</main>
<Footer/>   
        </LayoutContainer>
    );
}