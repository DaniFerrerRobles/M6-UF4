import React from 'react';
import Header from '@/components/Header'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Memory</title>
            </head>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;