import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Linkedin } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-medium mb-8">Jack Landis</h1>
        
        <div className="grid grid-cols-2 gap-4 text-[15px] text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <span>jacklandis2@outlook.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span>(904) 501-2513</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="w-4 h-4" />
            <span>Washington, D.C.</span>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-4 h-4" />
            <span>@jacklandis</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-12">
        <div className="border border-gray-200 dark:border-neutral-800 rounded-lg p-6">
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
            I am an experienced professional with a solid and notable background in project management. 
            My consistent track record of successfully delivering projects on time and within budget, 
            combined with my effective team leadership and strategic planning skills, make me a 
            substantially valuable and beneficial asset.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
          Experience
        </h2>
        
        <div className="space-y-8">
          <div className="relative pl-4 border-l-2 border-gray-200 dark:border-neutral-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Project Manager</h3>
              <span className="text-[13px] text-gray-500">2015 - Present</span>
            </div>
            <div className="text-[14px] text-gray-500 mb-3">Acme</div>
            <ul className="space-y-2">
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Managed a team of 10 to execute and deliver projects on time and within budget.
              </li>
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Optimized project delivery processes to increase efficiency by 20%.
              </li>
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Created project plans, risk assessments, and communication strategies.
              </li>
            </ul>
          </div>

          <div className="relative pl-4 border-l-2 border-gray-200 dark:border-neutral-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Assistant Project Manager</h3>
              <span className="text-[13px] text-gray-500">2010 - 2015</span>
            </div>
            <div className="text-[14px] text-gray-500 mb-3">ABC Inc.</div>
            <ul className="space-y-2">
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Assisted in the planning and execution of projects.
              </li>
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Coordinated with cross-functional teams to ensure project success.
              </li>
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Prepared project documentation and reports.
              </li>
            </ul>
          </div>

          <div className="relative pl-4 border-l-2 border-gray-200 dark:border-neutral-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Project Coordinator</h3>
              <span className="text-[13px] text-gray-500">2005 - 2010</span>
            </div>
            <div className="text-[14px] text-gray-500 mb-3">DEF Corp.</div>
            <ul className="space-y-2">
              <li className="text-[15px] text-gray-700 dark:text-gray-300">
                • Assisted in the coordination of various projects, ensuring they stay on track.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
          Education
        </h2>
        <div className="relative pl-4 border-l-2 border-gray-200 dark:border-neutral-800">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium">University of Florida</h3>
            <span className="text-[13px] text-gray-500">2020 - 2024</span>
          </div>
          <div className="text-[14px] text-gray-500 mb-3">Bachelor of Science in Information Systems</div>
          <ul className="space-y-2">
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Minor in Economics
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
} 