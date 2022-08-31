import { WebPlugin } from '@capacitor/core';

import type { CapacitorBgTasksPlugin } from './definitions';

export class CapacitorBgTasksWeb
  extends WebPlugin
  implements CapacitorBgTasksPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
