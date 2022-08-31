export interface CapacitorBgTasksPlugin {
  setTask(options: { [key: string]: any }): Promise<{ value: string }>;
}

export interface TaskConfig {
  taskId: string;
}
