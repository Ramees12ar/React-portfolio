import { Card, CardContent } from "./ui/card";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, tags, repoUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-soft-lg transition-transform tilt-hover">
      <div className="relative aspect-[16/9] w-full bg-muted">
        <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
      </div>
      <CardContent className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border bg-background/60">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {repoUrl && (
            <a className="text-sm underline hover:no-underline" href={repoUrl} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
          {liveUrl && (
            <a className="text-sm underline hover:no-underline" href={liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 