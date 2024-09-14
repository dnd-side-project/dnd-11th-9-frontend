import { Dimensions, Platform } from 'react-native';

import { SCREEN_SIZE } from '@/constants';

export const getSize = {
  deviceWidth: Platform.OS === 'web' ? SCREEN_SIZE.Web : Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  screenWidth: Platform.OS === 'web' ? SCREEN_SIZE.Web : Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};
