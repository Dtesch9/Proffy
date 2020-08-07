import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeachersList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -60px;
`;
