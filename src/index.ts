import { registerPlugin } from '@capacitor/core';

import type { CapacitorBgTasksPlugin } from './definitions';

const CapacitorBgTasks = registerPlugin<CapacitorBgTasksPlugin>(
  'CapacitorBgTasks',
  {
    web: () => import('./web').then(m => new m.CapacitorBgTasksWeb()),
  },
);

export * from './definitions';
export { CapacitorBgTasks };
