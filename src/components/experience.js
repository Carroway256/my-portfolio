import * as React from 'react';
import './experience.scss';
import StackItem from './StackItem.js';
const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <ExperienceItem
        date={'Oct/2023 - Jan/2024'}
        company={'Freelance Web Developer'}
        content={
          <>
            <li>Defining project for client needs</li>
            <li>Developing</li>
            <li>Managing hosting and domain</li>
          </>
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'Gatsby.js'} />
            <StackItem techName={'TypeScript'} />
            <StackItem techName={'Scss'} />
            <StackItem techName={'Tailwind'} />
          </div>
        }
      />
      <ExperienceItem
        date={'Oct/2022 - Sept/2023'}
        company={'Freeport Metrics'}
        title={'Web Developer'}
        content={
          <>
            <li>
              Working on many projects including: Website for managing payments on highways, Dating
              App,Website using Chat GPT API to improve buisness processes
            </li>
            <li>Chosing tools and developing architecture of web apps</li>
            <li>Mangaing work flow and deployment process</li>
            <li>Mentoring other devs</li>
          </>
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'React.js'} />
            <StackItem techName={'TypeScript'} />
            <StackItem techName={'GraphQL'} />
            <StackItem techName={'Scss'} />
            <StackItem techName={'Ant Design'} />
          </div>
        }
      />
      <ExperienceItem
        date={'Feb/2022 - Oct/2022'}
        company={'Capgemini'}
        title={'Junior Frontend Developer'}
        content={
          <>
            <li>Working on internal project that manages employees and processes</li>
          </>
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'React.js'} />
            <StackItem techName={'TypeScript'} />
            <StackItem techName={'Redux'} />
          </div>
        }
      />

      <ExperienceItem
        date={'Oct/2021 - Jan/2022'}
        company={'SkyGate '}
        title={'Junior Frontend Developer'}
        content={
          <>
            <li>Developing NFTs auction website</li>
            <li>Developing backend</li>
          </>
        }
        stack={
          <div className="flex gap-2">
            <StackItem techName={'React.js'} />
            <StackItem techName={'TypeScript'} />
            <StackItem techName={'Redux'} />
            <StackItem techName={'Node.js'} />
            <StackItem techName={'Express'} />
          </div>
        }
      />
    </div>
  );
};
export default Experience;

const ExperienceItem = ({ date, company, title, content, stack }) => {
  return (
    <div className="experience-item  flex gap-4 rounded-xl p-4  hover:shadow-2xl">
      <div className="w-1/2">{date}</div>
      <div className="w-1/2">
        <div className="flex  min-w-0 flex-col gap-4">
          <div className="font-bold">{company}</div>
          {title ? <div>{title}</div> : null}
          <ul className="list-disc text-sm">{content}</ul>
          <div>{stack}</div>
        </div>
      </div>
    </div>
  );
};
