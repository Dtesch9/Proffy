import React, { useCallback, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TopBar,
  GoBackButton,
  BackIcon,
  LogoImg,
  Header,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
  headerRigth?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  const { title, headerRigth, children } = props;

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

      <Header>
        <Title>{title}</Title>
        {headerRigth}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
