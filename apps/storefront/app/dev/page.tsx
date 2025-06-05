import BasicLink from '@/ui/components/BasicLink';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const links: { href: string; label: string }[] = [
  { href: '/dev/demo', label: 'Demo' },
  { href: '/dev/espots', label: 'Espots' },
  { href: '/dev/finance-mirror', label: 'Finance Mirror' },
  { href: '/dev/info', label: 'Info' },
  { href: '/dev/next', label: 'Next' },
  { href: '/dev/routing', label: 'Routing' },
  { href: '/dev/slider', label: 'Slider' },
  { href: '/dev/errors', label: 'Errors' },
];

export default async function DevPage() {
  return (
    <>
      <h1>Dev Page</h1>
      <List>
        {links.map((link) => (
          <ListItem key={link.href}>
            <BasicLink href={link.href}>{link.label}</BasicLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}
