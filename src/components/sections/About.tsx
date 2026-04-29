export default function About() {
  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
  ];

  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React and Node.js.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built responsive websites and web applications for various clients.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Central Philippine University',
      year: '2020'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Personal Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate web developer with {new Date().getFullYear() - 2020}+ years of experience in building 
              modern web applications using React, Next.js, TypeScript, and other cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I love creating intuitive user interfaces and solving complex problems through code.
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400">{edu.school}</p>
                  <p className="text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}