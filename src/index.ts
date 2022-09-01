import type { PluginListenerHandle, PluginResultError } from '@capacitor/core';
import { registerPlugin } from '@capacitor/core';

import type { CapacitorBgTasksPlugin, CapacitorBgTasksConfig } from './definitions';

const nativePlugin = registerPlugin<CapacitorBgTasksPlugin>(
  'CapacitorBgTasks',
  {},
);

export class CapacitorBgTasks {
  protected listener: PluginListenerHandle | null = null;

  protected async init(config: CapacitorBgTasksConfig, onEvent: CallableFunction, onTimeout: CallableFunction): Promise<void> {
    if (this.listener !== null) {
      await this.listener.remove();
      this.listener = null;
    }

    this.listener = await nativePlugin.addListener(config.taskId, (event:any) => {
      if (!event.timeout) {
        onEvent(event.taskId);
      } else {
        onTimeout(event.taskId);
      }
    });

    return new Promise((resolve: CallableFunction, reject: CallableFunction) => {
      nativePlugin.configure({ options: config }).then((result: any) => {
        resolve(result.status);
      }).catch((error: PluginResultError) => {
        reject(error.message);
      });
    });
  }


  public startTask(): Promise<{ value: string }> {
    return new Promise((resolve, reject) => {
      return nativePlugin.startTask().then(() => {
        resolve();
      }).catch((error: PluginResultError) => {
        reject(error.message);
      });
    });
  }

  public endTask(): Promise<{ value: string }> {
    return new Promise((resolve, reject) => {
      return nativePlugin.stopTask().then(() => {
        resolve();
      }).catch((error: PluginResultError) => {
        reject(error.message);
      });
    });
  }
}

export * from './definitions';
