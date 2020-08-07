import React from 'react';

import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';

import { Container, TeachersList } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeachersList>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeachersList>
    </Container>
  );
};

export default Favorites;
