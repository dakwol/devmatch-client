'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import './styles.scss';

interface Props {
  username: string;
  avatarUrl?: string;
  onClick?: () => void;
}

const UserAvatar: FC<Props> = ({ username, avatarUrl, onClick }) => {
  const initials = username
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={'avatar'} onClick={() => onClick()}>
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={username}
          width={40}
          height={40}
          className={'image'}
        />
      ) : (
        <div className={'fallback'}>{initials}</div>
      )}
    </div>
  );
};

export default UserAvatar;
