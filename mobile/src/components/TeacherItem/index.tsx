import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  HeartOutlineIcon,
  UnfavoriteIcon,
  ContactButton,
  WhatsappIcon,
  ContactButtonText,
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/Dtesch9.png' }} />

        <ProfileInfo>
          <Name>Douglas Tesch</Name>
          <Subject>Matemática</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Web Developer, Typescript full stack
        {'\n'}
        {'\n'}
        Passionate for highest level of programming techniques.
      </Bio>

      <Footer>
        <Price>
          {`Preço/hora   `}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton isFavorite>
            {1 > 0 ? <UnfavoriteIcon /> : <HeartOutlineIcon />}
          </FavoriteButton>

          <ContactButton>
            <WhatsappIcon />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
