import * as React from 'react';
import { ProjectList } from './ProjectList';
import { TechnologyList } from './TechnologyList';
import { LinkList } from './LinkList';

export interface Props {
  title: string;
  role: string;
  from: string;
  to: string;
  location: string;
  description: string;
  technologies: string[];
  tasks?: Array<{ title: string; details: string }>;
  links?: Array<{ title: string; url: string }>;
}

export const Project = (props: Props): JSX.Element => (
  <article className="resume-timeline-item position-relative pb-5">
    <div className="resume-timeline-item-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <h3 className="resume-position-title font-weight-bold mb-1">{props.title}</h3>
      </div>
      {props.role}
      <div className="resume-position-time">
        {props.from} - {props.to}{' '}
        <span
          style={{
            backgroundColor: `#80425F`,
            color: 'white',
            padding: '0px 7px',
            borderRadius: '25px',
            float: 'right'
          }}
        >
          {props.location}
        </span>
      </div>
    </div>
    <div className="resume-timeline-item-desc">
      <p>{props.description}</p>
      {props.tasks && props.tasks.length ? <ProjectList projects={props.tasks} /> : <div />}
      {props.technologies.length ? <TechnologyList technologies={props.technologies} /> : <div />}
      {props.links && props.links.length ? <LinkList links={props.links} /> : <div />}
    </div>
  </article>
);
