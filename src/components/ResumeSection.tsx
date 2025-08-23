import { Button } from "./ui/button";

export default function ResumeSection({ resumeLink }: { resumeLink: string }) {
  return (
    <div className="text-center">
      <Button asChild className="hover-ring text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <span className="glow-text">Download Resume</span>
        </a>
      </Button>
    </div>
  );
}
