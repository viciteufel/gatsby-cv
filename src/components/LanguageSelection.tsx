import * as React from 'react';
import { useState } from 'react';

export interface Language {
  title: string;
  code: string;
}

interface Props {
  currentLanguage: Language;
  availableLanguages: Array<Language>;
  onLanguageSelected: (language: Language) => void;
}

export const LanguageSelection = (props: Props): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ position: 'relative' }}>
        <button
          type="button"
          className="btn"
          style={{ cursor: 'pointer', backgroundColor: `#80425F`, color: 'white' }}
          onClick={(): void => setShowDropdown(!showDropdown)}
        >
          {props.currentLanguage.title} <i className="fas fa-chevron-down fa-fw" data-fa-transform="grow-6"></i>
        </button>
        {showDropdown &&
          props.availableLanguages.map(language => (
            <div
              key={language.code}
              style={{
                cursor: 'pointer',
                backgroundColor: '#C4AEB8',
                color: 'white',
                padding: '6px',
                margin: '0px 2px',
                position: 'absolute',
                zIndex: 100,
                width: 'calc(100% - 4px)'
              }}
              onClick={(): void => {
                props.onLanguageSelected(language);
                setShowDropdown(!setShowDropdown);
              }}
            >
              {language.title}
            </div>
          ))}
      </div>
    </div>
  );
};
