import React, { PropsWithChildren } from 'react';
import { Link as MuiLink } from '@mui/material';
import { Typography } from '@mui/material';

type Props = {
  href: string;
};

const Link = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <MuiLink href={href}>
      <Typography>{children}</Typography>
    </MuiLink>
  );
};

export default Link;
