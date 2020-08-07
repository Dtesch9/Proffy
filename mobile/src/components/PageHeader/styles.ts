import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

export const Container = styled.View`
  padding: 40px;
  background-color: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled(BorderlessButton)``;

export const BackIcon = styled.Image.attrs({
  source: backIcon,
})`
  resize-mode: contain;
`;

export const LogoImg = styled.Image.attrs({
  source: logoImg,
})`
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-vertical: 40px;
`;
