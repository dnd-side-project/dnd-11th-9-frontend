import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';

import { useSession } from '@/store';
import { theme } from '@/styles/theme';

import Toggle from '../common/toggle';
import Typography from '../common/typography';
import * as S from './MenuList.style';

type OneMenuProps = {
  title: string;
  isArrowVisible?: boolean;
  onPress: () => void;
};

function OneMenu({ title, onPress, isArrowVisible = false }: OneMenuProps) {
  return (
    <Pressable onPress={onPress}>
      <S.OneMenuContainer>
        <Typography
          variant='Body1/Normal'
          fontWeight='semiBold'>
          {title}
        </Typography>
        {isArrowVisible && (
          <Feather
            name='chevron-right'
            size={24}
            color={theme.color.Label.Neutral}
          />
        )}
      </S.OneMenuContainer>
    </Pressable>
  );
}

function MenuList() {
  const { signOut } = useSession();

  // TODO: 알림 설정 기능 추가
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  return (
    <S.MenuListContainer>
      <OneMenu
        title='직군'
        isArrowVisible
        onPress={() => router.push('/my/job')}
      />
      <S.OneMenuContainer>
        <Typography
          variant='Body1/Normal'
          fontWeight='semiBold'>
          알림 설정
        </Typography>
        <Toggle
          isOn={isNotificationOn}
          onToggle={() => {
            setIsNotificationOn((prev) => !prev);
          }}
        />
      </S.OneMenuContainer>
      <OneMenu
        title='서비스 정책'
        isArrowVisible
        onPress={() => router.push('/my/policy')}
      />
      <OneMenu
        title='로그아웃'
        onPress={() => {
          signOut();
        }}
      />
      <OneMenu
        title='회원탈퇴'
        onPress={() => router.push('/my/cancel-account')}
      />
    </S.MenuListContainer>
  );
}

export default MenuList;
