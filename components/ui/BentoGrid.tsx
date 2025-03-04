import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
};

// ✅ Project BentoGridItem (Unchanged)
export const BentoGridItem = ({
  id,
  title,
  description,
  github,
  techStack,
}: {
  id: number;
  title: string;
  description: string;
  github: string;
  techStack: string[];
}) => {
  return (
    <div className="border border-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
      <div className="mt-3">
        {techStack.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 block">
        GitHub Repository
      </a>
    </div>
  );
};

// ✅ Certification BentoGridItem (New Addition)
export const CertificationBentoGridItem = ({
  name,
  image,
  url,
}: {
  name: string;
  image: string;
  url: string;
}) => {
  return (
    <div className="border border-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 text-center bg-white">
      <div className="w-full flex justify-center">
        <Image 
          src={image} 
          alt={name} 
          width={150} 
          height={150} 
          className="rounded-lg object-cover"
        />
      </div>
      <h4 className="text-lg font-semibold mt-4 text-black">{name}</h4>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 block">
        View Certification
      </a>
    </div>
  );
};
