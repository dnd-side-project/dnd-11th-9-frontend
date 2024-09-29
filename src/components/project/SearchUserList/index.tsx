import { SimpleLineIcons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { useCallback, useMemo } from 'react';
import { useState } from 'react';
import { Pressable } from 'react-native';

import InputField from '@/components/common/input-field';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './stlye';

export type User = {
  id: number;
  name: string;
  userId: string;
  profileImage: string;
};

type Props = {
  selectUserList: User[];
  setSelectUserList: (newUser: User[]) => void;
  closeBottomSheet: () => void;
};

function SearchUserList({ selectUserList, setSelectUserList, closeBottomSheet }: Props) {
  const [userList, setUserList] = useState<User[]>(() => selectUserList);

  const previousUserList = useMemo(() => selectUserList, [selectUserList]);

  const addUser = useCallback((user: User) => {
    setUserList((prev) => [...prev, user]);
  }, []);

  const deleteUser = useCallback((id: number) => {
    setUserList((prev) => prev.filter((user) => user.id !== id));
  }, []);

  const addClick = useCallback(() => {
    setSelectUserList(userList);
    closeBottomSheet();
  }, [closeBottomSheet, setSelectUserList, userList]);

  const cancelClick = useCallback(() => {
    setSelectUserList(previousUserList);
    closeBottomSheet();
  }, [closeBottomSheet, previousUserList, setSelectUserList]);

  const data = [
    {
      id: 1,
      name: '양의진',
      userId: 'dml1335',
      profileImage: 'https://avatars.githubusercontent.com/u/77464040?v=4',
    },
    {
      id: 2,
      name: '양의진',
      userId: 'asdf091',
      profileImage: 'https://avatars.githubusercontent.com/u/77464040?v=4',
    },
    {
      id: 3,
      name: '이예지',
      userId: 'joyn1245',
      profileImage: 'https://avatars.githubusercontent.com/u/77464040?v=4',
    },
  ];

  return (
    <S.Container>
      <S.ActionBox>
        <Pressable onPress={cancelClick}>
          <Typography
            variant='Body1/Normal'
            fontWeight='medium'
            color={color.Label.Alternative}>
            취소
          </Typography>
        </Pressable>
        <Pressable onPress={addClick}>
          <Typography
            variant='Body1/Normal'
            fontWeight='medium'
            color={color.Label.Normal}>
            추가
          </Typography>
        </Pressable>
      </S.ActionBox>
      <S.Inner>
        <InputField
          backgroundColor={color.Background.Alternative}
          isShadow={false}
          icon={
            <SimpleLineIcons
              name='magnifier'
              style={{ flexShrink: 1, width: 20, height: 20 }}
              size={20}
            />
          }
          placeholder='팀원의 이름을 검색해주세요.'
        />
        <S.UserListBox>
          {data.map((user) => {
            const isChecked = userList.some((u) => u.id === user.id);
            return (
              <S.UserItem key={user.id}>
                <S.ProfileBox>
                  <S.UserProfileImage source={{ uri: user.profileImage }} />
                  <S.UserTextContainer>
                    <Typography
                      variant='Body1/Normal'
                      fontWeight='semiBold'
                      color={color.Label.Normal}>
                      {user.name}
                    </Typography>
                    <Typography
                      variant='Label1/Normal'
                      fontWeight='medium'
                      color={color.Label.Alternative}>
                      #{user.userId}
                    </Typography>
                  </S.UserTextContainer>
                </S.ProfileBox>
                <Checkbox
                  onValueChange={isChecked ? () => deleteUser(user.id) : () => addUser(user)}
                  value={isChecked}
                  color={isChecked ? color.Primary.Normal : undefined}
                />
              </S.UserItem>
            );
          })}
        </S.UserListBox>
      </S.Inner>
    </S.Container>
  );
}

export default SearchUserList;
