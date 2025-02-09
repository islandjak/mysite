export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-12">
      <h1 className="text-2xl font-normal mb-6">About Me</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I&apos;m Jack Landis, a software engineer based in Washington, D.C. I&apos;m passionate about building 
          intuitive and impactful software solutions. Currently, I&apos;m working at Deloitte where I focus on 
          developing enterprise applications and exploring innovative technologies.
        </p>

        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Outside of work, I enjoy contributing to open-source projects, writing about software development, 
          and exploring new technologies. I&apos;m particularly interested in web development, user experience, 
          and building tools that make developers&apos; lives easier.
        </p>

        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
          When I&apos;m not coding, you can find me exploring D.C.&apos;s food scene, reading about technology 
          trends, or working on personal projects that push my boundaries as a developer.
        </p>
      </div>
    </div>
  );
} 