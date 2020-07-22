import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
    }

`;
export const Avatar = styled.div`
    width: 52px;
    height: 49px;
    border-radius: 50%;
    margin-right: 10px;

    >img{
        width: 52px;
        height: 49px;
        border-radius: 50%;
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px; 
    }
    > span {
        font-size: 14px;
        color: var(--gray)
    }
`;
export const FollowButton = styled(Button)`
    padding: 6px 17px;
      
`;