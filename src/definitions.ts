export interface CapacitorBgTasksPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
