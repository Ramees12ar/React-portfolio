import { Card, CardContent } from "./ui/card";

export interface ToolCardProps {
    name: string;
    iconUrl?: string;
}

const bgForTool = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("node")) return "from-green-500/15 to-emerald-500/10";
    if (n.includes("express")) return "from-zinc-800/60 to-zinc-700/40 dark:from-zinc-200/20 dark:to-zinc-100/10";
    if (n.includes("postgres")) return "from-sky-500/20 to-blue-600/10";
    if (n.includes("timescale")) return "from-orange-500/20 to-amber-500/10";
    if (n.includes("docker")) return "from-sky-500/25 to-cyan-500/10";
    if (n.includes("kubernetes")) return "from-blue-600/25 to-indigo-600/10";
    if (n.includes("prefect")) return "from-indigo-500/25 to-fuchsia-500/10";
    if (n.includes("janus")) return "from-rose-500/25 to-orange-500/10";
    if (n.includes("react")) return "from-cyan-500/25 to-sky-500/10";
    if (n.includes("tailwind")) return "from-sky-400/25 to-emerald-400/10";
    return "from-primary/10 to-muted/20";
};

export default function ToolCard({ name, iconUrl }: ToolCardProps) {
    const gradient = bgForTool(name);
    return (
        <Card className="bulge-3d hover:shadow-soft-lg transition-transform will-change-transform">
            <CardContent className="relative p-5 flex flex-col items-center gap-3">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient}`} />
                {/* logo visibility shim */}
                <div className="relative z-10 grid place-items-center w-14 h-14 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur border bulge">
                    {iconUrl && (
                        <img
                            src={iconUrl}
                            alt={name}
                            className="w-10 h-10 object-contain"
                            loading="lazy"
                        />
                    )}
                </div>
                <span className="relative z-10 font-medium text-center text-sm">{name}</span>
            </CardContent>
        </Card>
    );
}
