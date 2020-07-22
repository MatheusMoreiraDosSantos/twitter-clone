import React from 'react';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    ExitIcon,
    Botside,
    Avatar,
    ProfileData,
 } from './styles';

 import Button from '../Button';
 import img from '../../assets/perfil.jpg';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />
              <MenuButton>
                  <HomeIcon />
                  <span>Página Principal</span>
              </MenuButton>
              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>
              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>
              <MenuButton>
                  <FavoriteIcon />
                  <span>favoritados</span>
              </MenuButton>
              <MenuButton className='active'>
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>
              <Button>
                  <span>Twittar</span>
              </Button>
          </Topside>
          <Botside>
                <Avatar>
                <img src={img} alt='perfil' />
              </Avatar>
              <ProfileData>
                  <strong>O pai</strong>
                  <span>@O_pai</span>
              </ProfileData>
              <ExitIcon/>
          </Botside>
      </Container>
  );
}

export default MenuBar;