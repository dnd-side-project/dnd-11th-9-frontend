import { SimpleLineIcons } from '@expo/vector-icons';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SolidButton from '@/components/common/button/SolidButton';
import DateInput from '@/components/common/date-input';
import ImageInput from '@/components/common/image-input';
import InputField from '@/components/common/input-field';
import PreviewImage from '@/components/common/preview-image';
import Typography from '@/components/common/typography';
import * as S from '@/components/project/ProjectRegisterForm/style';
import SearchUserList from '@/components/project/SearchUserList';
import { useTabBarEffect } from '@/hooks';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

function Create() {
  useTabBarEffect();
  const [image, setImage] = useState<string | null>(null);
  const [selectDate, setSelectDate] = useState<'start' | 'end'>('start');
  const [startDate, setStartDate] = useState<Date>(() => new Date());
  const [endDate, setEndDate] = useState<Date>(() => new Date());

  const userListBottomSheetRef = useRef<BottomSheetModal>(null);
  const [dataSheetOpen, setDataSheetOpen] = useState(false);
  const [userListSheetOpen, setUserListSheetOpen] = useState(false);

  const dataSheetClose = useCallback(() => {
    setDataSheetOpen(false);
  }, []);

  const sheetHeight = useMemo(() => getSize.screenHeight * 0.75, []);

  const snapPoints = useMemo(() => [sheetHeight], []);

  const openUserListSheet = useCallback(() => {
    setUserListSheetOpen(true);
    userListBottomSheetRef.current?.snapToIndex(0);
  }, []);

  const closeUserListSheet = useCallback(() => {
    setUserListSheetOpen(false);
    userListBottomSheetRef.current?.close();
  }, []);

  const pickImage = useCallback(async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }, []);

  const selectDateHandler = useCallback(
    (_: DateTimePickerEvent, date = new Date()) => {
      dataSheetClose();
      if (selectDate === 'start') {
        if (date > endDate) return Alert.alert('이전일보다 늦은 시작일은 선택할 수 없습니다.');
        setStartDate(date);
      } else {
        if (startDate > date) return Alert.alert('시작일보다 빠른 이전일은 선택할 수 없습니다.');
        setEndDate(date);
      }
    },
    [dataSheetClose, endDate, selectDate, startDate]
  );

  const startDateOpen = useCallback((select: 'start' | 'end') => {
    setDataSheetOpen(true);
    setSelectDate(select);
  }, []);

  useEffect(() => {
    return () => dataSheetClose();
  }, [dataSheetClose]);

  return (
    <GestureHandlerRootView>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: color.Background.Alternative,
          height: getSize.screenHeight,
        }}>
        <S.Container>
          <S.Form>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                프로젝트 이름
              </Typography>
              <InputField placeholder='프로젝트의 이름을 적어주세요' />
            </S.InputContainer>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                프로젝트 정보
              </Typography>
              <InputField placeholder='어떤 프로젝트인가요?' />
            </S.InputContainer>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                프로젝트 이미지
              </Typography>
              <S.ImageBox>
                <ImageInput onChange={pickImage} />
                <PreviewImage images={image ? [image] : []} />
              </S.ImageBox>
            </S.InputContainer>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                기간
              </Typography>
              <S.DatePickerBox>
                <DateInput
                  date={startDate}
                  onPress={() => startDateOpen('start')}
                />
                <S.DateSplitText>-</S.DateSplitText>
                <DateInput
                  date={endDate}
                  onPress={() => startDateOpen('end')}
                />
              </S.DatePickerBox>
            </S.InputContainer>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                팀원
              </Typography>
              <S.UserListSheetOpenButtonContainer>
                <InputField
                  icon={
                    <SimpleLineIcons
                      name='magnifier'
                      style={{ flexShrink: 1, width: 20, height: 20 }}
                      size={20}
                    />
                  }
                  disabled
                  placeholder='팀원의 이름을 검색해주세요.'
                />
                <S.UserListSheetOpenButton onPress={openUserListSheet} />
              </S.UserListSheetOpenButtonContainer>
            </S.InputContainer>
            <S.InputContainer>
              <Typography
                variant='Body1/Normal'
                fontWeight='semiBold'
                color={color.Label.Normal}>
                프로젝트 링크
              </Typography>
              <InputField placeholder='링크를 입력해주세요' />
            </S.InputContainer>
          </S.Form>
          <S.SubmitButtonBox>
            <SolidButton
              full
              size='large'>
              다음
            </SolidButton>
          </S.SubmitButtonBox>
        </S.Container>
      </ScrollView>
      {dataSheetOpen && (
        <DateTimePicker
          mode='date'
          locale='ko-KR'
          timeZoneName='Asia/Seoul'
          display='spinner'
          minimumDate={new Date(2010, 0, 1)}
          maximumDate={new Date(new Date().getFullYear() + 1, 11, 30)}
          value={selectDate === 'start' ? startDate : endDate}
          onChange={selectDateHandler}
        />
      )}
      {userListSheetOpen && (
        <S.BottomSheetBackground
          onTouchEnd={closeUserListSheet}
          style={{ opacity: 0.52 }}
        />
      )}
      <BottomSheet
        onClose={closeUserListSheet}
        ref={userListBottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}>
        <BottomSheetView style={{ flex: 1 }}>
          <SearchUserList />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default Create;
