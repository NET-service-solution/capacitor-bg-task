import type { Plugin } from '@capacitor/core';

interface AbstractConfig {
  requiresCharging?: boolean;
  requiresDeviceIdle?: boolean;
}

export interface CapacitorBgTasksPlugin extends Plugin {
  startTask(): Promise<{ value: string }>;
  stopTask(): Promise<{ value: string }>;
  configure(options: { options: { [key: string]: any; } }): Promise<{ value: string }>;
}

export interface CapacitorBgTasksConfig extends AbstractConfig {
  minimumFetchInterval?: number;
  taskId: string;
}
