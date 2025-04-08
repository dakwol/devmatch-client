import React, { FC, ReactNode } from 'react';
import './styles.scss';
import DynamicSidebar from '../../components/DynamicSidebar/DynamicSidebar';

interface Props {
  readonly children: ReactNode;
}

const LayoutSidebar:FC<Props> = ({
  children
}) => {
  return (
    <div className='layoutSidebarContainer'>
      <div className='layoutSidebar'>{<DynamicSidebar />}</div>
      <div className='layoutSidebarContent'>{children}</div>
    </div>
  )
}

export default LayoutSidebar