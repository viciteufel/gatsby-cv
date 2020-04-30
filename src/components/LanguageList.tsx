import * as React from 'react';
import { Language, Props as LanguageProps } from './Language';

interface Props {
  languages: LanguageProps[];
}

export const LanguageList = (props: Props): JSX.Element => (
  <ul className="list-unstyled resume-lang-list">
    {props.languages.map((language: LanguageProps, index: number) => (
      <Language key={index} {...language} />
    ))}
  </ul>
);
