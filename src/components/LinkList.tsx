import * as React from 'react';
import { getTranslatedLabel } from '../translations/provider';

interface Props {
  links: Array<{ title: string; url: string }>;
}

export const LinkList = (props: Props): JSX.Element => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">{getTranslatedLabel('LINKS')}</h4>
    <ul style={{ marginLeft: '17px' }}>
      {props.links.map((link, index) => (
        <li key={index}>
          <a className="link-unstyled" target="_blank" rel="noopener noreferrer" href={link.url}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
