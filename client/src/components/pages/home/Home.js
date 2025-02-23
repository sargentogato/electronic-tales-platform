import React, { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Bounce from 'react-reveal/Bounce';
import Emoji from 'a11y-react-emoji';
import 'swiper/swiper-bundle.css';

import './Home.css';

import { setHomeAsCurrentPage, unsetHomeAsCurrentPage } from '../../../redux/actions/page';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';
import { viewportToPixels } from '../../../utils/display/converter';
import Mansion from '../../interactive-images/mansion/Mansion';
import logo from '../../../resources/img/logo-transparent.png';
import logoSmall from '../../../resources/img/logo-transparent-350.png';
import elta from '../../../resources/img/illustrations/eltaskyline.svg';
import { ReactComponent as ChevronDown } from '../../../resources/img/icons/chevron-down.svg';
import { ReactComponent as FootPrints } from '../../../resources/img/footprints.svg';
import Tabs from '../../elements/tabs/Tabs';
import LanguageNavbar from '../../elements/navbar/language-navbar/LanguageNavbar';
import { ELECTRONIC_TALES_PRESENTS } from '../../../dictionnary/externalElectronicTalesLinks';

/**
 * This file contains Home and HomeCard (a subcomponent, scroll down to see it)
 */

const offset = -1 * viewportToPixels('20vh');

const Home = ({ setHomeAsCurrentPage, unsetHomeAsCurrentPage }) => {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  useEffect(() => {
    setHomeAsCurrentPage();
    return () => {
      unsetHomeAsCurrentPage();
    };
  }, []);

  return (
    <div id="home">
      {isDesktop ? (
        <>
          <div id="mansion-desktop">
            <div id="language-navbar-wrapper">
              <LanguageNavbar />
            </div>
            <img src={logo} id="logo" loading="auto" alt="Electronic Tales logo" />
            <img src={elta} alt="" />
          </div>
          <div id="content-container">
            <div id="presentation">
              <h2
                dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
                  t('home.presentation.title')
                )}
              ></h2>
              <p>{t('home.presentation.text')}</p>
              <div id="buttons-container">
                <a href={ELECTRONIC_TALES_PRESENTS.WHY} className="basic-button" target="_blank">
                  {t('home.presentation.buttons.knowMore')}
                </a>
                <ScrollLink
                  to="tabs-wrapper"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="basic-button"
                >
                  {t('home.presentation.buttons.enterPlatform')}
                </ScrollLink>
              </div>
            </div>
            <FootPrints />
            <div id="tabs-wrapper">
              <h2>{t('home.desktopVersion.tracksTabs.heading')}</h2>
              <Tabs />
            </div>
          </div>
        </>
      ) : (
        <Fragment>
          <div id="mansion">
            <Mansion />
          </div>
          <div id="home-worlds-container">
            <div id="language-navbar-wrapper">
              <LanguageNavbar />
            </div>
            <img
              srcSet={`${logoSmall} 350w, ${logo} 500w`}
              id="logo"
              loading="auto"
              alt="Electronic Tales logo"
            />

            <div id="presentation" className="home-door-container">
              <div className="home-door">
                <h2
                  dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
                    t('home.presentation.title')
                  )}
                  className="neon flicker"
                ></h2>
                <p>{t('home.presentation.text')}</p>
                <div id="buttons-container">
                  <a href={ELECTRONIC_TALES_PRESENTS.WHY} className="basic-button" target="_blank">
                    {t('home.presentation.buttons.knowMore')}
                  </a>
                  <ScrollLink
                    to="home-safe-space"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={offset}
                    className="basic-button"
                  >
                    {t('home.presentation.buttons.enterPlatform')}
                  </ScrollLink>
                </div>
              </div>
            </div>

            <HomeCard
              idForScroll="home-safe-space"
              title={t('home.safeSpace.title')}
              description={generateSanitizedDangerouslySetInnerHtml(
                t('home.safeSpace.description')
              )}
              callToAction={{
                link: '/safe-space',
                text: generateSanitizedDangerouslySetInnerHtml(
                  t('home.safeSpace.callToActionText')
                ),
              }}
              alternativeCallToAction={{
                text: generateSanitizedDangerouslySetInnerHtml(
                  t('home.safeSpace.alternativeCallToActionText')
                ),
                emoji: { symbol: '🐾' },
                whereToScrollTo: 'home-modern-world',
              }}
            />
            {/* <div id="spacer"></div> */}
            <Bounce bottom duration={2000}>
              <HomeCard
                idForScroll="home-modern-world"
                title={t('home.modernWorld.title')}
                description={generateSanitizedDangerouslySetInnerHtml(
                  t('home.modernWorld.description')
                )}
                callToAction={{
                  link: '/modern-world',
                  text: t('home.common.enterButtonText'),
                }}
                alternativeCallToAction={{
                  text: generateSanitizedDangerouslySetInnerHtml(
                    t('home.modernWorld.alternativeCallToActionText')
                  ),
                  emoji: { symbol: '🕵️‍♂️' },
                  whereToScrollTo: 'home-imaginarium',
                }}
              />
            </Bounce>
            <Bounce bottom duration={2000}>
              <HomeCard
                idForScroll="home-imaginarium"
                title={t('home.imaginarium.title')}
                description={generateSanitizedDangerouslySetInnerHtml(
                  t('home.imaginarium.description')
                )}
                callToAction={{
                  link: '/imaginarium',
                  text: t('home.common.enterButtonText'),
                }}
                alternativeCallToAction={{
                  text: generateSanitizedDangerouslySetInnerHtml(
                    t('home.imaginarium.alternativeCallToActionText')
                  ),
                  emoji: { symbol: '😅' },
                  whereToScrollTo: 'home-ancient-world',
                }}
              />
            </Bounce>
            <Bounce bottom duration={2000}>
              <HomeCard
                idForScroll="home-ancient-world"
                title={t('home.ancientWorld.title')}
                description={generateSanitizedDangerouslySetInnerHtml(
                  t('home.ancientWorld.description')
                )}
                callToAction={{
                  link: '/ancient-world',
                  text: t('home.common.enterButtonText'),
                }}
                alternativeCallToAction={{
                  text: generateSanitizedDangerouslySetInnerHtml(
                    t('home.ancientWorld.alternativeCallToActionText')
                  ),
                  emoji: { symbol: '🧗' },
                  alert: t('home.ancientWorld.alert'),
                }}
              />
            </Bounce>
          </div>
          <div id="spacer-small"></div>
        </Fragment>
      )}
    </div>
  );
};

const HomeCard = ({ idForScroll, title, description, callToAction, alternativeCallToAction }) => {
  const htmlOrText = (textKey) => {
    return textKey.__html ? (
      <span dangerouslySetInnerHTML={textKey}></span>
    ) : (
      <span>{textKey}</span>
    );
  };

  return (
    <div className="home-door-container">
      <div className="home-door" id={idForScroll}>
        <h2 className="neon flicker">{title}</h2>
        <p>{htmlOrText(description)}</p>
        <Link to={callToAction.link} className="basic-button">
          {htmlOrText(callToAction.text)}
        </Link>
        {alternativeCallToAction && (
          <div className="alternative-cta">
            <ScrollLink
              to={alternativeCallToAction.whereToScrollTo}
              spy={true}
              smooth={true}
              duration={500}
              offset={offset}
            >
              {htmlOrText(alternativeCallToAction.text)}
              <Emoji
                symbol={alternativeCallToAction.emoji.symbol}
                label={alternativeCallToAction.emoji.label}
              />
              {alternativeCallToAction.alert ? (
                <div
                  className="chevron-container"
                  onClick={() => alert(alternativeCallToAction.alert)}
                >
                  <ChevronDown />
                </div>
              ) : (
                <div className="chevron-container">
                  <ChevronDown />
                </div>
              )}
            </ScrollLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(Home);
