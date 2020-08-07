import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../../components/PageHeader';
import TeacherItem, { Teacher } from '../../../components/TeacherItem';

import { Container, TeachersList } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        setFavorites(JSON.parse(response));
      }
    });
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeachersList>
        {favorites.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} isFavorite />
        ))}
      </TeachersList>
    </Container>
  );
};

export default Favorites;
