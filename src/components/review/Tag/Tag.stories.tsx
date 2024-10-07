import type { Meta, StoryObj } from '@storybook/react';

import Storybook from '@/components/common/storybook';

import Tag from './';

const TagMeta: Meta<typeof Tag> = {
  title: 'questionnaire/Tag',
  component: Tag,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: [
          '걸어다니는 위키',
          '아이디어 화수분',
          '글도 잘쓰는 일잘러',
          '확신의 J',
          '책임감 넘치는 리더',
          '책임감 넘치는 팀원',
          '갈등을 못참는 박애주의자',
          '성실함의 아이콘',
          '몸에 밴 배려',
        ],
      },
      description: '카테고리명을 입력합니다.',
    },
    hasIcon: {
      control: {
        type: 'boolean',
      },
      description: '아이콘을 표시할지 결정합니다.',
    },
    isActive: {
      control: {
        type: 'boolean',
      },
      description: '칩의 활성화 여부를 결정합니다.',
    },
  },
};

export default TagMeta;

export const Primary: StoryObj<typeof TagMeta> = {
  args: {
    hasIcon: false,
    isActive: false,
    tag: '걸어다니는 위키',
  },
};

export const Preview: StoryObj<typeof TagMeta> = {
  render: () => {
    return (
      <Storybook>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={[
              '걸어다니는 위키',
              '아이디어 화수분',
              '글도 잘쓰는 일잘러',
              '확신의 J',
              '책임감 넘치는 리더',
              '책임감 넘치는 팀원',
              '갈등을 못참는 박애주의자',
              '성실함의 아이콘',
              '몸에 밴 배려',
            ]}
          />
          <Storybook.Item>
            <Tag
              hasIcon={false}
              isActive={false}
              tag='걸어다니는 위키'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='아이디어 화수분'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='글도 잘쓰는 일잘러'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='확신의 J'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='책임감 넘치는 리더'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='책임감 넘치는 팀원'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='갈등을 못참는 박애주의자'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='성실함의 아이콘'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='몸에 밴 배려'
            />
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={[
              '걸어다니는 위키',
              '아이디어 화수분',
              '글도 잘쓰는 일잘러',
              '확신의 J',
              '책임감 넘치는 리더',
              '책임감 넘치는 팀원',
              '갈등을 못참는 박애주의자',
              '성실함의 아이콘',
              '몸에 밴 배려',
            ]}
          />
          <Storybook.Item>
            <Tag
              hasIcon={false}
              tag='걸어다니는 위키'
            />
            <Tag
              hasIcon={false}
              tag='아이디어 화수분'
            />
            <Tag
              hasIcon={false}
              isActive={false}
              tag='글도 잘쓰는 일잘러'
            />
            <Tag
              hasIcon={false}
              tag='확신의 J'
            />
            <Tag
              hasIcon={false}
              tag='책임감 넘치는 리더'
            />
            <Tag
              hasIcon={false}
              tag='책임감 넘치는 팀원'
            />
            <Tag
              hasIcon={false}
              tag='갈등을 못참는 박애주의자'
            />
            <Tag
              hasIcon={false}
              tag='성실함의 아이콘'
            />
            <Tag
              hasIcon={false}
              tag='몸에 밴 배려'
            />
          </Storybook.Item>
        </Storybook.Row>
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={[
              '걸어다니는 위키',
              '아이디어 화수분',
              '글도 잘쓰는 일잘러',
              '확신의 J',
              '책임감 넘치는 리더',
              '책임감 넘치는 팀원',
              '갈등을 못참는 박애주의자',
              '성실함의 아이콘',
              '몸에 밴 배려',
            ]}
          />
          <Storybook.Item>
            <Tag
              hasIcon={true}
              tag='걸어다니는 위키'
            />
            <Tag
              hasIcon={true}
              tag='아이디어 화수분'
            />
            <Tag
              hasIcon={true}
              tag='글도 잘쓰는 일잘러'
            />
            <Tag
              hasIcon={true}
              tag='확신의 J'
            />
            <Tag
              hasIcon={true}
              tag='책임감 넘치는 리더'
            />
            <Tag
              hasIcon={true}
              tag='책임감 넘치는 팀원'
            />
            <Tag
              hasIcon={true}
              tag='갈등을 못참는 박애주의자'
            />
            <Tag
              hasIcon={true}
              tag='성실함의 아이콘'
            />
            <Tag
              hasIcon={true}
              tag='몸에 밴 배려'
            />
          </Storybook.Item>
        </Storybook.Row>{' '}
        <Storybook.Row>
          <Storybook.Description
            title='icon'
            variant={[
              '걸어다니는 위키',
              '아이디어 화수분',
              '글도 잘쓰는 일잘러',
              '확신의 J',
              '책임감 넘치는 리더',
              '책임감 넘치는 팀원',
              '갈등을 못참는 박애주의자',
              '성실함의 아이콘',
              '몸에 밴 배려',
            ]}
          />
          <Storybook.Item>
            <Tag
              isActive={true}
              hasIcon={true}
              tag='걸어다니는 위키'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='아이디어 화수분'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='글도 잘쓰는 일잘러'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='확신의 J'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='책임감 넘치는 리더'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='책임감 넘치는 팀원'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='갈등을 못참는 박애주의자'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='성실함의 아이콘'
            />
            <Tag
              isActive={true}
              hasIcon={true}
              tag='몸에 밴 배려'
            />
          </Storybook.Item>
        </Storybook.Row>
      </Storybook>
    );
  },
};
