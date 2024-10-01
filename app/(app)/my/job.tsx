import styled from '@emotion/native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Platform } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import { useTabBarEffect } from '@/hooks';
import { flexDirectionColumnCenter } from '@/styles/common';
import { theme } from '@/styles/theme';

const JOB_LIST = ['개발자', '디자이너', 'PM', '그 외'];

function JOB() {
  useTabBarEffect();

  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [otherJob, setOtherJob] = useState<string>('');

  const isSelected = (job: string) => selectedJob === job;

  const handleSaveJob = () => {
    // TODO: 직군 저장
    console.log(selectedJob === '그 외' ? otherJob : selectedJob);
    router.navigate('my');
  };

  return (
    <S.Container>
      <Typography
        variant='Title2'
        fontWeight='bold'>
        무슨 일을 하시는지{'\n'}알려주세요
      </Typography>
      <S.JobList>
        {JOB_LIST.map((job) =>
          job === '그 외' && isSelected(job) ? (
            <S.InputContainer key={job}>
              <S.TextInput
                placeholder='적어주세요'
                placeholderTextColor={theme.color.Label.Neutral}
                value={otherJob}
                onChangeText={setOtherJob}
              />
            </S.InputContainer>
          ) : (
            <S.JobSelectButton
              key={job}
              selected={isSelected(job)}
              onPress={() => setSelectedJob(job)}
              style={[
                Platform.OS === 'ios' && {
                  shadowColor: isSelected(job) ? 'rgba(26, 117, 255, 0.20)' : 'rgba(0, 0, 0, 0.05)',
                  shadowOffset: {
                    width: 0,
                    height: isSelected(job) ? 0 : 1,
                  },
                  shadowOpacity: 1,
                  shadowRadius: isSelected(job) ? 6 : 10,
                },
                Platform.OS === 'android' && {
                  elevation: 0.5,
                },
              ]}>
              <Typography
                variant='Body1/Normal'
                fontWeight='medium'>
                {job}
              </Typography>
            </S.JobSelectButton>
          )
        )}
      </S.JobList>
      <S.ButtonSection>
        <SolidButton
          full
          size='large'
          onPress={handleSaveJob}>
          완료
        </SolidButton>
      </S.ButtonSection>
    </S.Container>
  );
}

export default JOB;

const S = {
  Container: styled.View`
    flex: 1;
    padding: 30px 20px 0;
    background-color: ${({ theme }) => theme.color.Background.Alternative};
  `,
  JobList: styled.View`
    gap: 12px;
    margin-top: 34px;
  `,
  JobSelectButton: styled.Pressable<{ selected: boolean }>`
    justify-content: center;
    height: 64px;
    padding: 20px 16px;
    background-color: ${({ theme, selected }) =>
      selected ? theme.color.Blue[95] : theme.color.Common[100]};
    border-color: ${({ theme, selected }) =>
      selected ? theme.color.Primary.Normal : theme.color.Line.Neutral};
    border-width: 1px;
    border-radius: 8px;
  `,
  ButtonSection: styled.View`
    ${flexDirectionColumnCenter}
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 12px 20px 52px;
  `,
  InputContainer: styled.View`
    height: 64px;
    padding: 20px 16px;
    background-color: ${({ theme }) => theme.color.Blue[95]};
    border-color: ${({ theme }) => theme.color.Primary.Normal};
    border-width: 1px;
    border-radius: 8px;
  `,
  TextInput: styled.TextInput`
    flex: 1;
    font-size: 16px;
    outline-width: 0;
  `,
};
