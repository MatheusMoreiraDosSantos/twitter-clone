import React from 'react';
import Feed from '../Feed';

import { 
    Container,
    Banner, 
    Avatar, 
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
 } from './styles';
 import img from '../../assets/perfil.jpg';
 
const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
        <h1><i>O PAI TÁ ON-LINE</i></h1>
            <Avatar>
                <img src={img} alt='perfil' />
              </Avatar>
        </Banner>
        <ProfileData>
            <EditButton outlined >Editar Perfil</EditButton>
            <h1>O pai</h1>
            <h2>@O_pai</h2>
            <p>Developer at @Inject</p>
            <ul>
                <li>
                    <LocationIcon/>
                    Avaré SP Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 06 de Julho de 2000
                </li>
            </ul>
            <Followage>
                <span>
                    Seguindo <strong>898</strong>
                </span>
                <span>
                    <strong>98878273 </strong> Seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed/>
      </Container>
  );
}

export default ProfilePage;