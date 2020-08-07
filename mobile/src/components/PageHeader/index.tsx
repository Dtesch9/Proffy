import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TopBar,
  GoBackButton,
  BackIcon,
  LogoImg,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, [navigate]);

  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={handleGoBack}>
          <BackIcon />
        </GoBackButton>

        <LogoImg />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
