'use server';

import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';

export default async () => {
  return (
    <LayoutSection title="Not found boundary" color={colour.error}>
      <h1>Page not found</h1>
    </LayoutSection>
  );
};
