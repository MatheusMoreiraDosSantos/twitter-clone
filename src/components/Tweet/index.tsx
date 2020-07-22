import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

import img from '../../assets/perfil.jpg';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon/>
              O pai retweetou
          </Retweeted>
          <Body>
              <Avatar>
                <img src={img} alt='perfil' />
              </Avatar>
              <Content>
                  <Header>
                      <strong>O pai</strong>
                       <span>@O_pai</span>
                       <Dot/>
                        <time>27 de Jun</time>
                  </Header>
                  <Description>
                      O Pai ta On
                  </Description>
                  <ImageContent>
                    <img src={img} alt='perfil' />
                    </ImageContent>
                  <Icons>
                      <Status>
                          <ComentIcon />
                          10998908
                      </Status>
                      <Status>
                          <RetweetIcon />
                          876988727
                      </Status>
                      <Status>
                          <LikeIcon />
                          98989997
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;