import { Link } from 'gatsby';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import StackItem from './StackItem.js';
const Portfolio = () => {
  return (
    <div className="flex flex-col gap-12">
      <PortfolioItem
        site={
          <Link to="https://lost-pets.pl/">
            <StaticImage
              src="../images/lost-pets.PNG"
              alt="A dinosaur"
              className="md:max-w-[300px]    "
            />
          </Link>
        }
        title={'Lost Pets'}
        description={
          'My frst ever created website. It objective is to allow users to find their lost pets'
        }
        stack={
          <div className="flex  flex-wrap gap-2">
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
              className="md:max-w-[300px]    "
            />
          </Link>
        }
        title={'Impuls Biznes'}
        description={
          'I created this website for a private client. It is buissness site that describes what it does and how to work with them'
        }
        stack={
          <div className="flex flex-wrap  gap-2">
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
          <Link to="https://lost-pets.pl/" className="">
            <StaticImage
              src="../images/rick-morty.PNG"
              alt="A dinosaur"
              className="   md:max-w-[300px]"
            />{' '}
          </Link>
        }
        title={'Rick and Morty'}
        description={
          'This is small website that I have created to learn vue. It uses external API to browse Rick and Morty characters'
        }
        stack={
          <div className="flex flex-wrap  gap-2">
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
    <div className="flex flex-col justify-between gap-4 hover:text-yellow-500 md:flex-row md:p-2">
      <div className="relative md:w-[300px]">
        {site}{' '}
        <svg
          class="absolute right-1 top-1 h-6 w-6 text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{description}</div>
        <div>{stack}</div>
      </div>
    </div>
  );
};
