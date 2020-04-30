import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

export interface Props {
  technologies: string[];
}

export const TechnologyList = (props: Props): JSX.Element => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">{getTranslatedLabel('TECHNOLOGY_USED')}</h4>
    <ul className="list-inline">
      {props.technologies.map((tech: string, index: number) => (
        <li className="list-inline-item" key={index}>
          <span className="badge badge-primary badge-pill" style={{ backgroundColor: '#80425F', fontWeight: 'normal' }}>
            <a
              href={`http://google.com/search?q=${tech}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-unstyled"
            >
              {tech}
            </a>
          </span>
        </li>
      ))}
    </ul>
  </div>
);
