import React from 'react';
import ProfilePage from '../ProfilePage';

import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>
        <ProfileInfo>
          <strong>O pai</strong>
          <span>989798987 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage/>
      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
    </Container>
  );
}

export default Main;