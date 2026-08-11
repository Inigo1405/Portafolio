import type { ReactNode } from 'react';
import { HelmetProvider} from 'react-helmet-async';

interface Props {
  children: ReactNode;
}

export default function AppWrapper ({ children }: Props) {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};
