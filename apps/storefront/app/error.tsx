'use client';
import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';

export default async ({ error }) => {
  return (
    <LayoutSection title="Error" color={colour.error}>
      <h1>Error happened</h1>
      <p>{error.message}</p>
    </LayoutSection>
  );
};
