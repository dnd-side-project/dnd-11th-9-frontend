import { AntDesign } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Platform, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { z } from 'zod';

import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import DateInput from '@/components/common/date-input';
import ErrorText from '@/components/common/error-text';
import ImageInput from '@/components/common/image-input';
import InputField from '@/components/common/input-field';
import PreviewImage from '@/components/common/preview-image';
import Typography from '@/components/common/typography';
import ProjectInputField from '@/components/project/ProjectRegisterForm/ProjectInputField';
import * as S from '@/components/project/ProjectRegisterForm/style';
import type { User } from '@/components/project/SearchUserList';
import SearchUserList from '@/components/project/SearchUserList';
import { PROJECT_URLS } from '@/constants';
import { useBottomSheet, useTabBarEffect } from '@/hooks';
import { useSingleImage } from '@/hooks/useSingleImage';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

type CreateFormType = {
  name: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  link?: string;
  userList: User[];
};

const SHEET_HEIGHT = getSize.screenHeight * 0.75;
const TODAY = new Date();

function Create() {
  const router = useRouter();
  useTabBarEffect();

  const {
    control,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateFormType>({
    defaultValues: {
      name: '',
      description: '',
      image: '',
      startDate: TODAY,
      endDate: TODAY,
      link: '',
      userList: [],
    },
  });

  const [startDateTouched, setStartDateTouched] = useState(false);
  const [endDateTouched, setEndDateTouched] = useState(false);

  const [selectDate, setSelectDate] = useState<'start' | 'end'>('start');

  const [dateTimeSheetOpen, setDateTimeSheetOpen] = useState(false);

  useLayoutEffect(
    function handleWebAccessRestriction() {
      if (Platform.OS === 'web') {
        return router.replace('/project');
      }
    },
    [router]
  );

  const pickImage = useSingleImage();

  const [userListSheetOpen, userListBottomSheetRef, openUserListSheet, closeUserListSheet] =
    useBottomSheet();

  const selectDateHandler = useCallback(
    (_: DateTimePickerEvent, date = new Date()) => {
      setDateTimeSheetOpen(false);
      if (selectDate === 'start') {
        if (date > getValues('endDate'))
          return Alert.alert('이전일보다 늦은 시작일은 선택할 수 없습니다.');
        setValue('startDate', date);
      } else {
        if (getValues('startDate') > date)
          return Alert.alert('시작일보다 빠른 이전일은 선택할 수 없습니다.');
        setValue('endDate', date);
      }
    },
    [getValues, selectDate, setValue]
  );

  const onSubmit = useCallback(() => {
    // console.log(data, 'data');
    // {"description": "ddddd", "endDate": 2024-09-28T02:55:15.891Z, "image": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fdnd-119-frontend-3618ca0f-2ced-48cb-a763-65daee5044bd/ImagePicker/ae56ced8-30eb-4133-8435-
    // ffa4ccd04335.jpeg", "link": "dasdad", "name": "wepro", "startDate": 2024-09-28T02:55:15.891Z, "userList": [{"id": 1, "name": "양의진", "profileImage": "https://avatars.githubusercontent.com/u/77464040?v=4", "userId": "dml1335"}, {"id": 2, "name": "양의진", "profileImage": "https://avatars.githubusercontent.com/u/77464040?v=4", "userId": "asdf091"}]}
  }, []);

  const startDateOpen = useCallback((select: 'start' | 'end') => {
    setDateTimeSheetOpen(true);
    setSelectDate(select);
  }, []);

  return (
    <GestureHandlerRootView>
      <CustomLayout backgroundColor={color.Background.Alternative}>
        <CustomHeader
          mt
          title='프로젝트 등록'
          left={
            <CustomHeader.Button onPress={() => router.navigate({ pathname: PROJECT_URLS.MAIN })}>
              <CustomHeader.BackButton />
            </CustomHeader.Button>
          }
        />
        <ScrollView
          style={{
            height: getSize.screenHeight,
          }}>
          <S.Container>
            <S.Form>
              <ProjectInputField name='프로젝트 이름'>
                <Controller
                  control={control}
                  rules={{ required: '프로젝트 이름을 입력해주세요' }}
                  render={({ field: { value, ref, onChange } }) => (
                    <InputField
                      ref={ref}
                      value={value}
                      onChangeText={onChange}
                      error={errors.name?.message}
                      placeholder='어떤 프로젝트인가요?'
                    />
                  )}
                  name='name'
                />
              </ProjectInputField>
              <ProjectInputField name='프로젝트 설명'>
                <Controller
                  control={control}
                  rules={{ required: '프로젝트의 설명을 입력해주세요' }}
                  render={({ field: { value, ref, onChange } }) => (
                    <InputField
                      ref={ref}
                      value={value}
                      onChangeText={onChange}
                      error={errors.description?.message}
                      placeholder='어떤 프로젝트인가요?'
                    />
                  )}
                  name='description'
                />
              </ProjectInputField>
              <ProjectInputField name='프로젝트 이미지'>
                <Controller
                  control={control}
                  rules={{ required: '프로젝트의 이미지를 추가해주세요.' }}
                  render={({ field: { value, onChange } }) => (
                    <S.ImageBox>
                      <ImageInput onPress={() => pickImage(onChange)} />
                      <PreviewImage images={value ? [value] : []} />
                    </S.ImageBox>
                  )}
                  name='image'
                />
                {errors.image?.message && <ErrorText error_message={errors.image?.message} />}
              </ProjectInputField>
              <ProjectInputField
                required={false}
                name='기간'>
                <S.DatePickerBox>
                  <Controller
                    control={control}
                    render={({ field: { value } }) => (
                      <DateInput
                        date={value}
                        touched={startDateTouched}
                        onPress={() => startDateOpen('start')}
                        onTouchEnd={() => setStartDateTouched(true)}
                      />
                    )}
                    name='startDate'
                  />
                  <Typography
                    variant='Title3'
                    color={color.Label.Normal}>
                    -
                  </Typography>
                  <Controller
                    control={control}
                    render={({ field: { value } }) => (
                      <DateInput
                        date={value}
                        touched={endDateTouched}
                        onPress={() => startDateOpen('end')}
                        onTouchEnd={() => setEndDateTouched(true)}
                      />
                    )}
                    name='endDate'
                  />
                </S.DatePickerBox>
              </ProjectInputField>
              <ProjectInputField
                required={false}
                name='팀원'>
                <S.UserListSheetOpenButtonContainer>
                  <InputField
                    icon={
                      <AntDesign
                        name='search1'
                        style={{ flexShrink: 1, width: 20, height: 20 }}
                        size={20}
                      />
                    }
                    disabled
                    placeholder='팀원의 이름을 검색해주세요.'
                  />
                  <S.UserListSheetOpenButton onPress={() => openUserListSheet(0)} />
                </S.UserListSheetOpenButtonContainer>
                <S.SelectUserList>
                  {getValues('userList').map((user) => (
                    <S.SelectUserItem
                      style={shadow[1]}
                      key={user.userId}>
                      <Typography
                        variant='Body1/Reading'
                        fontWeight='medium'>
                        {user.name}
                      </Typography>
                    </S.SelectUserItem>
                  ))}
                </S.SelectUserList>
              </ProjectInputField>
              <ProjectInputField
                required={false}
                name='프로젝트 링크'>
                <Controller
                  control={control}
                  rules={{
                    validate: (value) => {
                      if (!value) return true;
                      const result = z.string().url().safeParse(value);
                      return result.success || '올바른 링크를 입력해주세요';
                    },
                  }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      placeholder='링크를 입력해주세요'
                    />
                  )}
                  name='link'
                />
                {errors.link?.message && <ErrorText error_message={errors.link?.message} />}
              </ProjectInputField>
            </S.Form>
            <S.SubmitButtonBox>
              <SolidButton
                onPress={handleSubmit(onSubmit)}
                full
                size='large'>
                프로젝트 생성하기
              </SolidButton>
            </S.SubmitButtonBox>
          </S.Container>
        </ScrollView>
      </CustomLayout>
      {dateTimeSheetOpen && (
        <DateTimePicker
          mode='date'
          locale='ko-KR'
          timeZoneName='Asia/Seoul'
          display='spinner'
          minimumDate={new Date(2010, 0, 1)}
          maximumDate={new Date(new Date().getFullYear() + 1, 11, 30)}
          value={selectDate === 'start' ? getValues('startDate') : getValues('endDate')}
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
        snapPoints={[SHEET_HEIGHT]}>
        <BottomSheetView style={{ flex: 1 }}>
          {userListSheetOpen && (
            <SearchUserList
              selectUserList={getValues('userList')}
              setSelectUserList={(newUser: User[]) => setValue('userList', newUser)}
              closeBottomSheet={closeUserListSheet}
            />
          )}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default Create;
