const projects = [
  {
    name: 'SATT Outreach Agent',
    description: 'AI-driven outreach assistant designed to personalize communication and streamline campaign execution.'
  },
  {
    name: 'Day Off Planner',
    description: 'Scheduling tool that helps teams optimize time-off planning while preserving operational coverage.'
  },
  {
    name: 'Slack Clone',
    description: 'Collaboration app prototype focused on real-time communication and clean team-based workflows.'
  },
  {
    name: 'Depop Shipping Redesign',
    description: 'UX and process redesign concept to simplify shipping decisions and reduce fulfillment errors.'
  },
  {
    name: 'TileBar Inventory Dashboard',
    description: 'Data dashboard concept for inventory visibility, trend monitoring, and faster decision making.'
  }
];

const skills = [
  'Python', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub',
  'Cursor', 'VS Code', 'Figma', 'Excel', 'Google Sheets', 'SAP'
];

const createCard = ({ name, description }) => {
  const article = document.createElement('article');
  article.className = 'card';

  const heading = document.createElement('h3');
  heading.textContent = name;

  const body = document.createElement('p');
  body.textContent = description;

  article.append(heading, body);
  return article;
};

const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  projects.forEach((project) => grid.appendChild(createCard(project)));
};

const renderSkills = () => {
  const list = document.getElementById('skills-list');
  skills.forEach((skill) => {
    const item = document.createElement('li');
    item.textContent = skill;
    list.appendChild(item);
  });
};

const setupMenu = () => {
  const button = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');

  button.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
};

const setupAnimations = () => {
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section) => observer.observe(section));
};

const setYear = () => {
  document.getElementById('year').textContent = String(new Date().getFullYear());
};

renderProjects();
renderSkills();
setupMenu();
setupAnimations();
setYear();
