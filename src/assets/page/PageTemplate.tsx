import React from "react";

type Props = {
    children: React.ReactNode,
}

const PageTemplate = ({ children }: Props) => {
    return (
        <>
          <main>
               {children}
          </main>
        </>
    );
}

export default PageTemplate;