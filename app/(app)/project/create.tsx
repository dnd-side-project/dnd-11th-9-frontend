import { ScrollView } from 'react-native';

import ProjectRegisterForm from '@/components/project/ProjectRegisterForm';
import { useTabBarEffect } from '@/hooks';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

function Create() {
  useTabBarEffect();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: color.Background.Alternative,
        height: getSize.screenHeight,
      }}>
      <ProjectRegisterForm />
    </ScrollView>
  );
}

export default Create;
