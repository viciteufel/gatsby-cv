import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Props as socialMediaProps, SocialMedia } from './SocialMedia';

interface Props {
  name: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
  socialMedia: socialMediaProps;
  profile: FluidObject | Array<FluidObject>;
}

export const Header = (props: Props): JSX.Element => (
  <header className="resume-header pt-4 pt-lg-0">
    <div className="media flex-column flex-lg-row">
      <Img className="mr-3 img-fluid picture mx-auto" fluid={props.profile} />
      <div
        className="media-body p-4 d-flex flex-column flex-lg-row mx-auto mx-lg-0"
        style={{ backgroundColor: `#80425F`, color: 'white' }}
      >
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{props.name}</h1>
          <div className="title mb-3">{props.role}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={`mailto:${props.email}`} className="link-unstyled">
                <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />
                {props.email}
              </a>
            </li>
            <li className="mb-2">
              <a href={`tel:${props.phone}`} className="link-unstyled">
                <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6" />
                {props.phone}
              </a>
            </li>
            <li className="mb-2">
              <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <i className="fas fa-map-marker-alt fa-fw mr-2" data-fa-transform="grow-6" />
                {props.address}
              </div>
            </li>
            <li>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <i className="fas fa-user-alt fa-fw mr-2" data-fa-transform="grow-6" />
                {props.birthday}
              </div>
            </li>
          </ul>
        </div>
        <SocialMedia {...props.socialMedia} />
      </div>
    </div>
  </header>
);
