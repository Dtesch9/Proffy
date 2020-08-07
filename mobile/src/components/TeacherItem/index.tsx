import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

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
  isFavorite: boolean;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, isFavorite }) => {
  const [isFavorited, setIsFavorited] = useState(isFavorite);

  const handleLinkToWhatsapp = useCallback(() => {
    api.post('/connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, [teacher]);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray: Teacher[] = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(teacherItem => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited, teacher]);

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
          <FavoriteButton
            onPress={handleToggleFavorite}
            isFavorite={isFavorited}
          >
            {isFavorited ? <UnfavoriteIcon /> : <HeartOutlineIcon />}
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <WhatsappIcon />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
