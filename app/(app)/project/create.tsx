import { SafeAreaView } from 'react-native';

import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

function Create() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.Background.Alternative,
        height: getSize.screenHeight,
      }}>
      <Typography>프로젝트 생성</Typography>
    </SafeAreaView>
  );
}

export default Create;
