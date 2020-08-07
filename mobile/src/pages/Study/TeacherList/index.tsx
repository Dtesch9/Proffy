import React, { useState, useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';

import {
  Container,
  TeachersList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRigth={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )} // prettier-ignore
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Qual a matéria?" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual o horário?" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

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
