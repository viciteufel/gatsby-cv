import * as React from 'react';

export interface Props {
  name: string;
  xpInPercentage: string;
}

export const ResumeSkill = (props: Props): JSX.Element => (
  <li className="mb-2">
    <div className="resume-skill-name">
      <a
        href={`http://google.com/search?q=${props.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link-unstyled"
      >
        {props.name}
      </a>
    </div>
    <div className="progress resume-progress" style={{ height: '0.6rem', backgroundColor: '#e9ecef' }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: props.xpInPercentage,
          backgroundColor: '#80425F'
        }}
      />
    </div>
  </li>
);
