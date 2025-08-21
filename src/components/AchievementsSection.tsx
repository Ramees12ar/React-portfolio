import { Card, CardContent } from "./ui/card";

interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export default function AchievementsSection({ items }: { items: AwardItem[] }) {
  return (
    <div className="grid gap-6">
      {items.map((a, i) => (
        <Card key={i} className="tilt-hover hover:shadow-soft-lg transition-transform">
          <CardContent className="p-5 space-y-1">
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.organization} • {a.date}</p>
            <p className="text-sm leading-relaxed">{a.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 