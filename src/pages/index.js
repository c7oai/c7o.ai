import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const SvgCrescendo = require('@site/static/img/crescendo_purple.svg').default

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('bg-c7o-night-rider', styles.heroBanner)}>
      <div className="container">
        <SvgCrescendo role="img"></SvgCrescendo>
        <p className="mt-10 text-2xl text-c7o-strobe-light dark:text-c7o-strobe-light">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

/*
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>


        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
