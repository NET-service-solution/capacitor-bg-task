import { registerPlugin } from '@capacitor/core';

import type { CapacitorBgTasksPlugin, TaskConfig } from './definitions';

const nativePlugin = registerPlugin<CapacitorBgTasksPlugin>(
  'CapacitorBgTasks',
  {},
);

export class CapacitorBgTasks {
  static setTask(config: TaskConfig): Promise<void> {
    return new Promise((resolve, reject) => {
      return nativePlugin.setTask(config).then(() => {
        resolve();
      }).catch((error) => {
        reject(error.message);
      });
    });
  }
}

export * from './definitions';
