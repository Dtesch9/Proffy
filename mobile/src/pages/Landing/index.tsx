import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonText,
  StudyIcon,
  GiveClassesIcon,
  TotalConnectons,
  HeartIcon,
} from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudyPages = useCallback(() => {
    navigate('Study');
  }, [navigate]);

  return (
    <Container>
      <Banner />

      <Title>
        Seja bem-vindo,
        {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button
          onPress={handleNavigateToStudyPages}
          style={{ backgroundColor: '#9871f5' }}
        >
          <StudyIcon />

          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button
          onPress={handleNavigateToGiveClassesPage}
          style={{ backgroundColor: '#04d361' }}
        >
          <GiveClassesIcon />

          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnectons>
        {`Total de 285 conexões já realizadas `}
        <HeartIcon />
      </TotalConnectons>
    </Container>
  );
};

export default Landing;
