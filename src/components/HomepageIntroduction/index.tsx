import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type IntroductionItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const IntroductionList: IntroductionItem[] = [
  {
    title: 'About Me',
    // Svg: require('@site/static/img/polar-bear.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'About This Tutorial',
    // Svg: require('@site/static/img/polar-bear.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'About My Blog',
    // Svg: require('@site/static/img/polar-bear.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Introduction({title, description}: IntroductionItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.introductionSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageIntroduction(): JSX.Element {
  return (
    <section className={styles.introduction}>
      <div className="container">
        <div className="row">
          {IntroductionList.map((props, idx) => (
            <Introduction key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

