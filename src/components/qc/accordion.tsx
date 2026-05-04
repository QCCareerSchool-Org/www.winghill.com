import type { FC, PropsWithChildren } from 'react';
import { Accordion } from 'react-bootstrap';

interface Props {
  title: string;
  open?: boolean;
  className?: string;
}

export const QCAccordion: FC<PropsWithChildren<Props>> = props => (
  <Accordion className={props.className} defaultActiveKey={props.open ? '0' : undefined}>
    <Accordion.Item eventKey="0">
      <Accordion.Header><span className="lead fw-bold">{props.title}</span></Accordion.Header>
      <Accordion.Body>
        {props.children}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);
