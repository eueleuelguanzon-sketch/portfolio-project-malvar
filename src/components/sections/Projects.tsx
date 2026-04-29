import { Project } from '@/lib/types';
import Card from '../ui/Card';

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://www.contentful.com/blog/next-js-vs-react/',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform with a beautiful UI and seamless user experience.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://medium.com/@vaishnavimokadam/8-rules-of-clean-ui-design-706f8b32c6c1',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A real-time chat application with websockets and authentication.',
    technologies: ['React', 'Socket.io', 'Express'],
    imageUrl: 'https://www.youtube.com/watch?v=gbocZlm71nE',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}