'use client';

import layoutState from '@/utils/state/layoutState';

const HeaderTitlePlaceholder = () => {
  const { title } = layoutState.useData();
  return <h1 id="header-title">{title || ''}</h1>;
};

export default HeaderTitlePlaceholder;
