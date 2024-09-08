import { Dimensions, Platform } from 'react-native';

export const getSize = {
  deviceWidth: Platform.OS === 'web' ? 375 : Dimensions.get('screen').width,
  deviceHeight: Dimensions.get('screen').height,
  screenWidth: Platform.OS === 'web' ? 375 : Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};
