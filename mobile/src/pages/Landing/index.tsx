import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

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
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total);
    });
  }, []);

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
        {`Total de ${totalConnections} conexões já realizadas `}
        <HeartIcon />
      </TotalConnectons>
    </Container>
  );
};

export default Landing;
