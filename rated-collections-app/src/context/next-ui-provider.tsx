'use client';

import { NextUIProvider } from '@nextui-org/react';

export function NextUIProviderWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
