import React from 'react';
import terremoto_de_xandanga from '../../assets/terremoto_de_xandanga.jpg'
import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({name, nickname}) => {
  return (
      <Container>
          <div>
              <Avatar>
                  <img src={terremoto_de_xandanga} alt='terremoto de xandanga'/>
              </Avatar>
              <Info>
                  <strong>{name}</strong>
                  <span>{nickname}</span>
              </Info>
          </div>
          <FollowButton outlined>Off</FollowButton>

      </Container>
  );
}

export default FollowSuggestion;