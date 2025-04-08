'use client';

import Link from 'next/link';
import React, { FC } from 'react';
import { SidebarBlock } from '../../types/sidebar';
import './styles.scss'

interface Props {
  blocks: SidebarBlock[];
}

const Sidebar: FC<Props> = ({ blocks }) => {
  return (
    <aside className="sidebar">
      {blocks.map((block, index) => (
        <div key={index} className="sidebarBlock">
          {block.heading && <div className="sidebarHeading">{block.heading}</div>}
          <ul className="sidebarList">
            {block.items.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <li className='sidebarItem'>
                  {item.icon && <span className="sidebarIcon">{item.icon}</span>}
                  <span>{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))
      }
    </aside >
  );
};

export default Sidebar;
