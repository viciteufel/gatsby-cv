// tslint:disable: jsx-no-lambda
import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import { EducationList } from './../components/EducationList';
import { Header } from './../components/Header';
import { LanguageList } from './../components/LanguageList';
import { OtherSkillList } from './../components/OtherSkillList';
import { Project, Props as ProjectProps } from './../components/Project';
import { ResumeSkillList } from './../components/ResumeSkillList';
import { TabSelector } from './../components/TabSelector';
import { getTranslatedLabel, initLocale } from './../translations/provider';
import { LanguageSelection, Language } from './../components/LanguageSelection';
import './CV.css';
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();
import Lines from './../assets/images/backgrounds/lines.png';
import { useState } from 'react';

let scrollTo = 0;

interface Props {
  location: any;
  data: any;
  pageContext: any;
}

const scrollToY = (): void => {
  if (window && scrollTo !== 0) {
    window.scrollTo(0, scrollTo);
  }
};

const saveScrollPosition = (): void => {
  if (document) {
    scrollTo = document.documentElement.scrollTop;
  }
};

const german = { title: 'Deutsch', code: 'de' };
const english = { title: 'English', code: 'en' };

const CV = (props: Props): JSX.Element => {
  initLocale(props.pageContext.locale);

  const [language, setLanguage] = useState({
    selectedLanguage: german,
    availableLanguages: [english]
  });

  const isWorkSelected = (): boolean => {
    return (
      (!props.location.pathname.includes('work') && !props.location.pathname.includes('opensource')) ||
      props.location.pathname.includes('work')
    );
  };

  const [selectedItem, setSelectedItem] = React.useState(isWorkSelected() ? 0 : 1);
  const [items] = React.useState([
    {
      name: getTranslatedLabel('WORK_XP'),
      path: 'work',
      checked: isWorkSelected(),
      icon: 'fas fa-briefcase'
    },
    {
      name: getTranslatedLabel('OPENSOURCE'),
      path: 'opensource',
      checked: props.location.pathname.includes('opensource'),
      icon: 'fab fa-github'
    }
  ]);

  React.useEffect(() => {
    setTimeout(() => scrollToY(), 100);
    const languages = [german, english];
    const selectedLanguage = languages.find(l => window.location.pathname.includes(`/${l.code}/`));
    const availableLanguages = languages.filter(l => !window.location.pathname.includes(`/${l.code}/`));
    setLanguage({ selectedLanguage, availableLanguages });
  }, [window.location.pathname]);

  const didSelectLanguage = (language: Language): void => {
    navigate(`${language.code}/${items[selectedItem].path}`);
  };

  return (
    <div className="container" style={{ userSelect: 'none' }}>
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <Header
            profile={props.data.profile.childImageSharp.fluid}
            role={props.data.social.nodes[0].childSocialJson.role}
            name={props.data.social.nodes[0].childSocialJson.name}
            phone={props.data.social.nodes[0].childSocialJson.phone}
            email={props.data.social.nodes[0].childSocialJson.email}
            address={props.data.social.nodes[0].childSocialJson.address}
            birthday={props.data.social.nodes[0].childSocialJson.birthday}
            socialMedia={{
              github: props.data.social.nodes[0].childSocialJson.social.github,
              xing: props.data.social.nodes[0].childSocialJson.social.xing
            }}
          />
          <div className="resume-body p-5" style={{ backgroundImage: `url(${Lines})`, overflow: 'hidden' }}>
            <LanguageSelection
              currentLanguage={language.selectedLanguage}
              availableLanguages={language.availableLanguages}
              onLanguageSelected={didSelectLanguage}
            />

            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                {getTranslatedLabel('CAREER_SUMMARY')}
              </h2>
              <div className="resume-section-content">{htmlToReactParser.parse(props.data.summary.html)}</div>
            </section>

            <div className="row">
              <div className="col-lg-9">
                <TabSelector
                  items={items}
                  onClick={index => {
                    saveScrollPosition();
                    setSelectedItem(index);
                    navigate(`/${props.pageContext.locale}/${items[index].path}`);
                  }}
                />
                <div className="mb-3" />
                {items[0].checked && (
                  <section className="resume-section experience-section mb-5">
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        {props.data.projects.nodes[0].childProjectsJson.projects.map(
                          (project: ProjectProps, index: number) => (
                            <Project key={index} {...project} />
                          )
                        )}
                      </div>
                    </div>
                  </section>
                )}
                {items[1].checked && (
                  <section className="resume-section experience-section mb-5">
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        {props.data.opensource.nodes[0].childOpensourceJson.projects.map(
                          (project: ProjectProps, index: number) => (
                            <Project key={index} {...project} />
                          )
                        )}
                      </div>
                    </div>
                  </section>
                )}
              </div>
              <div className="col-lg-3" style={{ marginTop: '40px' }}>
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('SKILLS')}
                  </h2>
                  <div className="resume-section-content">
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.ios} title={'iOS'} />
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.web} title={'Web'} />
                    <OtherSkillList
                      skills={props.data.skills.nodes[0].childSkillsJson.others}
                      title={getTranslatedLabel('OTHERS')}
                    />
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('EDUCATION')}
                  </h2>
                  <div className="resume-section-content">
                    <EducationList educations={props.data.educations.nodes[0].childEducationsJson.educations} />
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('LANGUAGES')}
                  </h2>
                  <div className="resume-section-content">
                    <LanguageList
                      languages={[
                        {
                          language: getTranslatedLabel('GERMAN'),
                          skill: getTranslatedLabel('NATIVE')
                        },
                        {
                          language: getTranslatedLabel('ENGLISH'),
                          skill: getTranslatedLabel('FLUENT')
                        }
                      ]}
                    />
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('INTEREST')}
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">{getTranslatedLabel('WATERSPORT')}</li>
                      <li className="mb-1">{getTranslatedLabel('READING')}</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
      <footer className="footer text-center pt-2">
        <small className="copyright">
          Designed with <i className="fas fa-heart" /> by{' '}
          <a href="http://themes.3rdwavemedia.com" target="_blank" rel="noopener noreferrer">
            Xiaoying Riley
          </a>{' '}
          for developers
        </small>
      </footer>
      <footer className="footer text-center pt-2 pb-5">
        <small className="source-code">
          <i className="fab fa-github" />{' '}
          <a
            href="https://github.com/firsttris/gatsby-cv"
            className="link-unstyled"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getTranslatedLabel('SOURCEONGITHUB')}
          </a>
        </small>
      </footer>
    </div>
  );
};

export default CV;

export const query = graphql`
  query($locale: String!) {
    profile: file(relativePath: { eq: "profil.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    summary: markdownRemark(frontmatter: { locale: { eq: $locale }, name: { eq: "summary" } }) {
      html
      frontmatter {
        locale
        name
      }
    }
    opensource: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "opensource" } }) {
      nodes {
        name
        childOpensourceJson {
          id
          projects {
            title
            description
            from
            to
            technologies
            links {
              title
              url
            }
            location
          }
        }
      }
    }
    projects: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "projects" } }) {
      nodes {
        name
        childProjectsJson {
          id
          projects {
            title
            description
            from
            role
            to
            technologies
            tasks {
              title
              details
            }
            location
          }
        }
      }
    }
    skills: allFile(filter: { name: { eq: "skills" } }) {
      nodes {
        name
        childSkillsJson {
          ios {
            name
            xpInPercentage
          }
          web {
            name
            xpInPercentage
          }
          others
        }
      }
    }
    social: allFile(filter: { name: { eq: "social" } }) {
      nodes {
        childSocialJson {
          email
          name
          phone
          role
          address
          birthday
          social {
            github
            xing
          }
        }
      }
    }
    educations: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "educations" } }) {
      nodes {
        childEducationsJson {
          id
          educations {
            from
            titel
            to
            uni
          }
        }
      }
    }
  }
`;
