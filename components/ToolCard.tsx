import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Link href={`/tools/${tool.id}`} className="hover:underline">
            {tool.name}
          </Link>
          <Badge>{tool.category}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{tool.description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/tools/${tool.id}`}
            className="text-primary hover:underline"
          >
            View Details
          </Link>
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>
      </CardContent>
    </Card>
  );
}