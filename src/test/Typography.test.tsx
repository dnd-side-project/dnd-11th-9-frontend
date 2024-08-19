import { screen } from '@testing-library/react-native';

import { Typography } from '@/components/common/typography';
import { render } from '@/utils';

describe('<Typography />', () => {
  test('스냅샷 테스트', () => {
    const tree = render(<Typography variant='H2'>Typography</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('타이포그래피가 똑바로 렌더링 되는지 확인한다.', () => {
    render(<Typography>Test</Typography>);

    screen.getByRole('text', { name: 'Test' });
  });
});
