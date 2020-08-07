import React from 'react';

import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';

import { Container, TeachersList } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

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

export default TeacherList;
