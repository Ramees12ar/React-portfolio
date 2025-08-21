import { Button } from "./ui/button";

export default function ResumeSection({ resumeLink }: { resumeLink: string }) {
  return (
    <div className="text-center">
      <Button asChild className="hover-ring">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <span className="glow-text">Download Resume</span>
        </a>
      </Button>
    </div>
  );
}
