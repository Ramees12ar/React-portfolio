import { Card, CardContent } from "./ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  role,
  company,
  duration,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <Card className="tilt-hover hover:shadow-soft-lg transition-transform">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm text-muted-foreground">
          {company} • {duration}
        </p>
        <ul className="list-disc list-inside mt-3 text-sm space-y-1">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
