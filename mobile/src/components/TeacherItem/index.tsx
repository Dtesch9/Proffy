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

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  subject: string;
  whatsapp: string;
}

type TeacherItemProps = {
  teacher: Teacher;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          {`Preço/hora   `}
          <PriceValue>{`R$ ${teacher.cost},00`}</PriceValue>
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
