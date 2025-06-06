'use client';
import layoutState from '@/utils/state/layoutState';
import TitleHeaderClient from './TitleHeaderClient';

const TitleHeader = () => {
  const { title } = layoutState.useData();
  return (
    <>
      <title>{title || 'Default Title in TitleHeader'}</title>
      <TitleHeaderClient title={title || null} />
    </>
  );
};

export default TitleHeader;
