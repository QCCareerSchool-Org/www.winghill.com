'use client';

import type { StaticImageData } from 'next/image';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  header?: ReactNode;
  title?: ReactNode;
  src?: StaticImageData;
  className?: string;
}

export const QCCard: FC<PropsWithChildren<Props>> = props => (
  <Card className={`shadow ${props.className ?? ''}`}>
    {props.header && <Card.Header>{props.header}</Card.Header>}
    {props.src && <Card.Img src={props.src.src} />}
    <Card.Body>
      {props.title && <Card.Title>{props.title}</Card.Title>}
      {props.children}
    </Card.Body>
  </Card>
);
