import React from 'react';
import Link from 'next/link'; // Usamos Link de next/link

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Juego">Juego</Link>
                    </li>
                    <li>
                        <Link href="/Acerca-de">Acerca de</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;