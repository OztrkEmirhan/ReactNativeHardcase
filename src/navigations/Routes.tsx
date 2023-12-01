// routes.ts
export const Routes = {
  MAIN_SCREEN: 'MainScreen',
  // Diğer sayfa adları...
} as const;

export type RouteName = keyof typeof Routes;
