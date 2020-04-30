import * as React from 'react';
import { getTranslatedLabel } from '../translations/provider';

interface Props {
  projects: Array<{ title: string; details: string }>;
}

export const ProjectList = (props: Props): JSX.Element => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">{getTranslatedLabel('ACHIEVEMENTS')}</h4>
    <table style={{ margin: '0px 0px 17px 0px' }}>
      <tbody>
        {props.projects.map((project, index: number) => (
          <tr key={index}>
            <td style={{ width: '1px', whiteSpace: 'nowrap', padding: '5px 10px 5px 0px', verticalAlign: 'baseline' }}>
              {project.title}
            </td>
            <td style={{ padding: '5px 0px' }}>{project.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
