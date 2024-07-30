import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

type PermissionLayoutProps = {
  children: React.ReactNode;
  comments: React.ReactNode;
  details: React.ReactNode;
};

function PermissionLayout({
  children,
  comments,
  details,
}: PermissionLayoutProps) {
  return <>{details}</>;
}

export default PermissionLayout;
