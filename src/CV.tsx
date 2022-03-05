import cx from 'clsx'
import Icon from './Icon.tsx'
import isURL from 'is-url'
import isEmail from 'is-email'
import './styles/index.scss';

// NOTE: https://www.zipjob.com/blog/graphic-designer-use-creative-resume/

type Experience = {
  name: string,
  position?: string
  date: string,
  details: string[],
  technologies: string[],
  link?: string,
}

const data = {
  name: 'Romain Grégoire',
  title: 'Software Engineer',

  contact: [
    { name: 'Email',    icon: 'RegEnvelope',    value: 'romgrk.cc@gmail.com' },
    { name: 'Phone',    icon: 'Phone',          value: '(514) 778-1580' },
    { name: 'Location', icon: 'RegAddressCard', value: 'Montréal (Qc)' },
    { name: 'Github',   icon: 'Github',         value: 'https://github.com/romgrk' },
  ],

  skills: [
    { name: 'Node.JS',    value: 5 },
    { name: 'React',      value: 5 },
    { name: 'C/C++',      value: 4 },
    { name: 'Assembly',   value: 3 },
    { name: 'Java',       value: 3 },
    { name: 'Rust',       value: 2 },
    { name: 'Go',         value: 2 },
  ],

  about:
    `I have a wide range of interests, from micro-controllers and electronics
    up to language parsing and web animation. I code for fun and a few of my personal
    projects are available on github.
    I am also comfortable in web design, as demonstrated by this document.`,

  languages: [
    { name: 'French',  level: 'Excellent' },
    { name: 'English', level: 'Excellent' },
    { name: 'Spanish', level: 'Good' },
  ],

  education: [
    {
      degree: 'DEC, Comp. Sc. & Mathematics',
      place: 'Collège de Maisonneuve',
      date: '2009–2014',
    },
    {
      degree: 'Classes in Software Engineering',
      place: 'École de Technologie Supérieure',
      date: '2012–2013',
    },
  ],

  experience: [
    {
      name: 'Comparative',
      date: '2021–now',
      position: 'Software Engineer',
      details: [
        'Implementation of a performance-focused database in C++, and implementation of a React web app for our SaaS product.',
      ],
      technologies: ['C++', 'Typescript', 'React'],
    },
    {
      name: 'Canadian Center for Computational Genomics (McGill)',
      date: '2017–2021',
      position: 'Full-stack Developer',
      details: [
        'Creation of web apps and CLI tools for research projects in bioinformatics & genomic analysis.'
      ],
      technologies: ['NodeJS', 'Python', 'C'],
    },
    {
      name: 'Objectif Lune',
      date: '2016–2017',
      position: 'Solutions Developer',
      details: [
        `Creation of web and mobile apps (frontend and backend) with the in-house development products.`
      ],
      technologies: ['SASS', 'Webpack', 'React', 'NodeJS'],
    }
  ] as Experience[],

  projects: [
    {
      name: 'Mouvement Démocratie Nouvelle',
      date: '2014, 2016',
      position: 'Volunteer',
      details: [
        `Development of an interactive map with the Google Maps API and of an event creation system.`
      ],
      technologies: ['JavaScript', 'HTML', 'PHP', 'SQL'],
    },
    {
      name: 'DEC Synthesis Project',
      date: '2012',
      position: 'Student',
      details: [
        `Creation of a physic engine simulator in 2D, applied to solid objects and handling collisions, gravity, friction, etc.`
      ],
      technologies: ['Java', 'XML'],
      link: 'https://github.com/romgrk/physic_engine',
    },
    {
      name: 'Apathy is Boring',
      date: '2009',
      position: 'Volunteer',
      details: [
        `Updates to an app to visualize data about canadian MPs, with synchronization with parliament's servers.`
      ],
      technologies: ['Ruby', 'HTML', 'SQL'],
    },
  ] as Experience[],
}

function CV() {
  return (
    <section className="sheet padding-0mm">
      <div className='header'>
        <div className='header__left'>
          <div className='header__name'>
            {data.name}
          </div>
          <div className='header__title'>
            {data.title}
          </div>
        </div>
        <div className='header__right'>
        </div>
      </div>
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
    </section>
  );
}

function Sidebar() {
  return (
    <div className='sidebar'>

      <Skills />
      <Summary />
      <Contact className='flex-1' />

      <div className='sidebar__languages'>
        {data.languages.map(lang =>
          <div className='language' key={lang.name}>
            <div className='language__name'>{lang.name}</div>
            <div className='language__level'>{lang.level}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className='sidebar__skills'>
      {data.skills.map(skill =>
        <div className='skill' key={skill.name}>
          <div className='skill__name'>{skill.name}</div>
          <div className='skill__stars'>
            {Array(5).fill(0).map((_, index) =>
              <span className={cx('star', { active: index < skill.value })}>
                <Icon name='Star' />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Summary() {
  return (
    <div className='mb-8 Summary'>
      <div className='Summary__header'>
        About
      </div>
      <div className='Summary__content'>
        {data.about}
      </div>
    </div>
  )
}

function Contact({ className }) {
  return (
    <div className={cx('Contact', className, 'space-y-6')}>
      <div className='Contact__header'>
        Contact
      </div>
      {data.contact.map(entry =>
        <div className='flex flex-row Contact__item'>
          <div className='flex flex-col justify-center mr-4 text-xl align-center opacity-60'>
            <Icon name={entry.icon} />
          </div>
          <div className='flex-1'>
            <div className='mb-1 text-sm opacity-60 font-header Contact__label'>
              {entry.name}
            </div>
            <div className='font-text'>
              {isURL(entry.value) ?
                <a href={entry.value}>{entry.value}</a> :
               isEmail(entry.value) ?
                <a href={`mailto:${entry.value}`}>{entry.value}</a> :
                entry.value
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Main() {
  return (
    <div className='main'>
      <Education />
      <Experience />
    </div>
  )
}

function Education() {
  return (
    <div className='education'>
      <div className='education__header'>
        Education
      </div>
      <div className='education__content'>
        {data.education.map(item =>
          <div key={item.degree} className='education__item'>
            <div className='education__left'>
              <div className='education__degree'>{item.degree}</div>
              <div className='education__place'>{item.place}</div>
            </div>
            <div className='education__right'>
              <div className='education__date'>
                {item.date}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className='experience'>
      <div className='experience__header'>
        Experiences & Personal projects
      </div>
      <div className='experience__content'>
        {data.experience.concat(data.projects).map(item =>
          <div key={item.name} className='experience__item'>
            <div className='experience__left'>
              <div className='experience__title'>
                {item.position &&
                  <div className='experience__position'>{item.position}</div>
                }
                <div className='flex flex-row align-center space-x-2'>
                  <span className='experience__name'>{item.name}</span>
                  {item.link &&
                    <a href={item.link} className='experience__link'>
                      {formatURL(item.link)}
                    </a>
                  }
                </div>
              </div>

              <div className='experience__details'>
                {item.details.map(line => <div key={line}>{line}</div>)}
              </div>

              <div className='experience__technologies'>
                {item.technologies.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className='experience__right'>
              <div className='experience__date'>
                {item.date}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function formatURL(url) {
  return url
    .replaceAll('https://', '')
    .replaceAll('http://', '')
}

export default CV;
