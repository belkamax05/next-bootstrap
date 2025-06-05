'use client';
import layoutState from '@/utils/state/layoutState';
import { useQueryClient } from '@tanstack/react-query';
import { FC, useLayoutEffect } from 'react';

const TitleHeaderClient: FC<{ title: string }> = ({ title }) => {
  const queryClient = useQueryClient();
  useLayoutEffect(() => {
    const titleHeader = typeof document !== 'undefined' && document.getElementById('header-title');
    if (titleHeader) titleHeader.textContent = title;
    layoutState.appendData({ title }, queryClient);
  });
  return null;
};

export default TitleHeaderClient;
