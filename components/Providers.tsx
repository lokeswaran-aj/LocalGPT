import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const Providers = (props: Props) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
        >
            {props.children}
        </ThemeProvider>
    );
};

export default Providers;
