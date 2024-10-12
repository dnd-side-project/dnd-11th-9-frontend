import { AntDesign, Feather } from '@expo/vector-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CustomHeader from '@/components/common/custom-header/index';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

const CustomHeaderMeta: Meta<typeof CustomHeader> = {
  title: 'common/CustomHeader',
  component: CustomHeader,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color',
      },
      description: '배경색을 설정합니다.',
    },
    title: {
      control: {
        type: 'text',
      },
      description: '헤더 타이틀을 설정합니다.',
    },
  },
};

export default CustomHeaderMeta;

export const Preview1: StoryObj<typeof CustomHeader> = {
  args: {
    title: '프로젝트',
  },
  render: (args) => {
    return (
      <SafeAreaProvider>
        <CustomHeader
          title='프로젝트'
          left={
            <CustomHeader.Button onPress={() => console.log('뒤로가기 클릭')}>
              <Feather
                name='chevron-left'
                size={24}
              />
            </CustomHeader.Button>
          }
          right={
            <CustomHeader.Button>
              <Typography
                variant='Body1/Normal'
                fontWeight='medium'
                color={color.Label.Alternative}>
                편집
              </Typography>
            </CustomHeader.Button>
          }
          {...args}
        />
      </SafeAreaProvider>
    );
  },
};

export const Preview2: StoryObj<typeof CustomHeader> = {
  args: {
    title: '프로젝트',
    backgroundColor: color.Background.Alternative,
  },
  render: (args) => {
    return (
      <SafeAreaProvider>
        <CustomHeader
          left={
            <CustomHeader.Button onPress={() => console.log('뒤로가기 클릭')}>
              <Feather
                name='chevron-left'
                size={24}
              />
            </CustomHeader.Button>
          }
          right={
            <CustomHeader.ButtonGroup>
              <CustomHeader.ButtonGroupItem>
                <AntDesign
                  name='search1'
                  size={24}
                />
              </CustomHeader.ButtonGroupItem>
              <CustomHeader.ButtonGroupItem>
                <AntDesign
                  name='plus'
                  size={24}
                />
              </CustomHeader.ButtonGroupItem>
            </CustomHeader.ButtonGroup>
          }
          {...args}
        />
      </SafeAreaProvider>
    );
  },
};
