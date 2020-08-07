import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image.attrs({
  source: landingImg,
})`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const StudyIcon = styled.Image.attrs({
  source: studyIcon,
})``;

export const GiveClassesIcon = styled.Image.attrs({
  source: giveClassesIcon,
})``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 20px;
`;

export const TotalConnectons = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 14px;
  line-height: 20px;
  max-width: 160px;
  margin-top: 40px;
`;

export const HeartIcon = styled.Image.attrs({
  source: heartIcon,
})``;
