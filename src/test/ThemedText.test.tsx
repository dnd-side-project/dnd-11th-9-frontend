import renderer from 'react-test-renderer';

import { CustomText } from '@/src/components/common';

it(`renders correctly`, () => {
  const tree = renderer.create(<CustomText>Snapshot test!</CustomText>).toJSON();

  expect(tree).toMatchSnapshot();
});
