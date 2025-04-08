'use client';

import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import './styles.scss';
import UserAvatar from '../../components/userAvatar/UserAvatar';
import { redirect } from 'next/navigation';

interface NavLink {
  link: string;
  title: string;
}

interface Props {
  readonly logo: ReactNode;
  readonly links: NavLink[];
}

const Navigation: FC<Props> = ({ logo, links }) => {
  return (
    <nav className="nav">
      <div className="navContainer">
        <Link href="/" className="logo">
          {logo}
        </Link>
        <div className='navLinksContainer'>
          <div className="navLinks">
            {links.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            ))}

          </div>

          <UserAvatar username={'Dakwol'} onClick={() => {redirect('login')}}/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
