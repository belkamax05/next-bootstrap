import BasicLink from '@/ui/components/BasicLink';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import startCase from 'lodash/startCase';
import { PropsWithChildren } from 'react';

const pageNames = [
  'no-error',
  'server-with-boundary',
  'server-client-boundary',
  'server-both-boundary',
  'client-client-boundary',
  'client-effect-boundary',
  'page-not-found',
] as const;

type PageName = typeof pageNames[number];

const pagesDetails: Partial<Record<PageName, { expects?: string }>> = {
  'no-error': {
    expects: 'renders normally',
  },
  'server-with-boundary': {
    expects: 'error.tsx',
  },
  'server-client-boundary': {
    expects: 'error.tsx',
  },
  'server-both-boundary': {
    expects: 'error.tsx',
  },
  'client-client-boundary': {
    expects: 'ErrorBoundary render',
  },
  'client-effect-boundary': {
    expects: 'ErrorBoundary render',
  },
  'page-not-found': {
    expects: 'not-found.tsx',
  },
};

const links: { href: string; label: string }[] = pageNames.map((item: string) => ({
  label: `${startCase(item)} ${
    pagesDetails[item as PageName]?.expects ? `- ${pagesDetails[item as PageName].expects}` : ''
  }`,
  href: `/dev/errors/${item}`,
}));

const DevErrorsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h3>Dev errors</h3>
      <hr />
      <List>
        <ListItem>
          <BasicLink href={'/dev'}>Dev index</BasicLink>
        </ListItem>
        <ListItem>
          <BasicLink href={'/dev/errors'}>Dev errors index</BasicLink>
        </ListItem>
      </List>
      <hr />
      <List>
        {links.map((link) => (
          <ListItem key={link.href}>
            <BasicLink href={link.href}>{link.label}</BasicLink>
          </ListItem>
        ))}
      </List>
      <hr />
      {children}
    </>
  );
};

export default DevErrorsLayout;
