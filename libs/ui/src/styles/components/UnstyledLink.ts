'use client';
import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styles/styled';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

const name = 'UnstyledLink';

const UnstyledLink: StyledComponent<PropsWithChildren<LinkProps>> = styled(Link, {
  name,
  slot: 'link',
})({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
  },
}) as never;

export default UnstyledLink;
