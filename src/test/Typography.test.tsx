import renderer from 'react-test-renderer';

import { Typography } from '@/components/common/typography';

describe('<Typography />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Typography>Snapshot test!</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
