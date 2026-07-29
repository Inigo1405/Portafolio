import type { ReactNode } from 'react';
import { HelmetProvider} from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';


interface Props {
  children: ReactNode;
}

export default function AppWrapper ({ children }: Props) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </HelmetProvider>
  );
};
