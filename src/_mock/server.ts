import { setupServer } from 'msw/native';

import { handler } from '@/_mock/handlers';

export const server = setupServer(...handler);
