'use server';
import TitleHeaderClient from './TitleHeaderClient';

const TitleHeader = ({ title }: { title?: string }) => {
  return (
    <>
      <title>{title || 'Default Title in TitleHeader'}</title>
      <TitleHeaderClient title={title || null} />
    </>
  );
};

export default TitleHeader;
