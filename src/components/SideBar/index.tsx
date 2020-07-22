import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import StickBox from 'react-sticky-box';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
 } from './styles';


const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder='Buscar no Twitter' />
              <SearchIcon/>
          </SearchWrapper>
          <StickBox>
            <Body>
            <List title='Talvez O pai curta'
                  elements={[
                    <FollowSuggestion 
                        name='Terremoto_de_xandanga'
                        nickname='@Terremoto_de_xandanga'
                    />                     
                  ]}
            />
            <List title='Talvez O pai curta'
                  elements={[
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                  ]}
            />
          </Body>
          </StickBox>
          
      </Container>
  );
}

export default SideBar;