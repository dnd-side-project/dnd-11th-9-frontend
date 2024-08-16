import type { HttpHandler } from 'msw';
import { delay } from 'msw';
import { http, HttpResponse } from 'msw';

import type { getProjects } from '@/apis/example/project.api';

export const ProjectHandler: HttpHandler[] = [
  http.get('http://localhost:3000/projects', async () => {
    const response: Awaited<ReturnType<typeof getProjects>> = {
      projects: [
        {
          id: '1',
          name: 'Project 1',
          createdAt: new Date(),
          endDate: new Date(),
          startDate: new Date(),
          description: 'Description 1',
          status: 'active',
          hasReview: false,
          updatedAt: new Date(),
          userCount: 2,
        },
        {
          id: '2',
          name: 'Project 2',
          createdAt: new Date(),
          endDate: new Date(),
          startDate: new Date(),
          description: 'Description 2',
          status: 'active',
          hasReview: false,
          updatedAt: new Date(),
          userCount: 3,
        },
      ],
    };

    await delay(1000);

    return HttpResponse.json(response);
  }),
];
