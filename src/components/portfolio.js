import { Link } from 'gatsby';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import StackItem from './StackItem.js';
const Portfolio = () => {
  return (
    <div className="flex flex-col gap-8">
      <PortfolioItem
        site={
          <Link to="https://lost-pets.pl/">
            <StaticImage
              src="../images/lost-pets.PNG"
              alt="A dinosaur"
              className="max-w-[300px]   "
            />
          </Link>
        }
        title={'Lost Pets'}
        description={
          'My frst ever created website. It objective is to allow users to find their lost pets'
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'React.js'} />
            <StackItem techName={'Firebase'} />
            <StackItem techName={'Google maps API'} />
            <StackItem techName={'Redux'} />
          </div>
        }
      />
      <PortfolioItem
        site={
          <Link to="https://impuls-biznes.pl/">
            <StaticImage
              src="../images/impuls-biznes.PNG"
              alt="A dinosaur"
              className="max-w-[300px]   "
            />
          </Link>
        }
        title={'Impuls Biznes'}
        description={
          'I created this website for a private client. It is buissness site that describes what it does and how to work with them'
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'Gatsby.js'} />
            <StackItem techName={'Tailwind'} />
            <StackItem techName={'Google maps API'} />
            <StackItem techName={'Email.js'} />
            <StackItem techName={'Netlify'} />
          </div>
        }
      />
      <PortfolioItem
        site={
          <Link to="https://lost-pets.pl/">
            <StaticImage
              src="../images/lost-pets.PNG"
              alt="A dinosaur"
              className="max-w-[300px]   "
            />
          </Link>
        }
        title={'Rick and Morty'}
        description={
          'This is small website that I have created to learn vue. It uses external API to browse Rick and Morty characters'
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'Vue.js'} />
            <StackItem techName={'HTML'} />
            <StackItem techName={'CSS'} />
          </div>
        }
      />
    </div>
  );
};
export default Portfolio;

const PortfolioItem = ({ title, site, description, stack }) => {
  return (
    <div className="flex">
      <div className="w-1/2">{site}</div>
      <div className="flex w-1/2 flex-col gap-4">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{description}</div>
        <div>{stack}</div>
      </div>
    </div>
  );
};
