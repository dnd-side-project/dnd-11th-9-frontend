import { render } from '@testing-library/react-native';

import Provider from '@/components/common/provider';

type CustomRender = typeof render;

const customRender: CustomRender = (ui, options) => {
  return render(<Provider>{ui}</Provider>, options);
};

export { customRender as render };
