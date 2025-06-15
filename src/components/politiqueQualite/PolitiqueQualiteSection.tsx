
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PolitiqueQualiteSectionProps {
  title: string;
  icon: LucideIcon;
  content: string[];
  id: string;
}

export const PolitiqueQualiteSection = ({ title, icon: Icon, content, id }: PolitiqueQualiteSectionProps) => {
  return (
    <Card id={id} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
