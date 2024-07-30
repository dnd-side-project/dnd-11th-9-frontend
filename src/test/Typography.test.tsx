import renderer from 'react-test-renderer';

import { Typography } from '@/components/common/Typography';

it(`renders correctly`, () => {
  const tree = renderer.create(<Typography>Snapshot test!</Typography>).toJSON();

  expect(tree).toMatchSnapshot();
});
