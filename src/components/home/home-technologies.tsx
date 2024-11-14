import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAmazondynamodb,
  SiAmazonwebservices,
  SiAndroid,
  SiAngular,
  SiAnthropic,
  SiApple,
  SiAstro,
  SiAwslambda,
  SiCanva,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGo,
  SiGooglecloud,
  SiGooglegemini,
  SiGraphql,
  SiHetzner,
  SiHtml5,
  SiIonic,
  SiJquery,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRealm,
  SiRedis,
  SiRust,
  SiServerless,
  SiSupabase,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const technologies = [
  {
    title: "AI Technologies",
    items: [
      {
        title: "OpenAI",
        icon: <SiOpenai className="h-12 w-12 text-primary" />,
      },
      {
        title: "Google Gemini",
        icon: <SiGooglegemini className="h-12 w-12 text-primary" />,
      },
      {
        title: "Anthropic",
        icon: <SiAnthropic className="h-12 w-12 text-primary" />,
      },
      {
        title: "Meta LLama",
        icon: <SiMeta className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        title: "React",
        icon: <SiReact className="h-12 w-12 text-primary" />,
      },
      {
        title: "Next.js",
        icon: <SiNextdotjs className="h-12 w-12 text-primary" />,
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="h-12 w-12 text-primary" />,
      },
      {
        title: "Typescript",
        icon: <SiTypescript className="h-12 w-12 text-primary" />,
      },
      {
        title: "Vue",
        icon: <SiVuedotjs className="h-12 w-12 text-primary" />,
      },
      {
        title: "Svelte",
        icon: <SiSvelte className="h-12 w-12 text-primary" />,
      },
      {
        title: "Angular",
        icon: <SiAngular className="h-12 w-12 text-primary" />,
      },
      {
        title: "HTML5",
        icon: <SiHtml5 className="h-12 w-12 text-primary" />,
      },
      {
        title: "jQuery",
        icon: <SiJquery className="h-12 w-12 text-primary" />,
      },
      {
        title: "Astro",
        icon: <SiAstro className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        title: "PHP",
        icon: <SiPhp className="h-12 w-12 text-primary" />,
      },
      {
        title: "Laravel",
        icon: <SiLaravel className="h-12 w-12 text-primary" />,
      },
      {
        title: "Node.js",
        icon: <SiNodedotjs className="h-12 w-12 text-primary" />,
      },
      {
        title: "Express.js",
        icon: <SiExpress className="h-12 w-12 text-primary" />,
      },
      {
        title: "Nest",
        icon: <SiNestjs className="h-12 w-12 text-primary" />,
      },
      {
        title: "Python",
        icon: <SiPython className="h-12 w-12 text-primary" />,
      },
      {
        title: "Go",
        icon: <SiGo className="h-12 w-12 text-primary" />,
      },
      {
        title: "Rust",
        icon: <SiRust className="h-12 w-12 text-primary" />,
      },
      {
        title: "GraphQL",
        icon: <SiGraphql className="h-12 w-12 text-primary" />,
      },
      {
        title: "Lambda",
        icon: <SiAwslambda className="h-12 w-12 text-primary" />,
      },
      {
        title: "Serverless",
        icon: <SiServerless className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        title: "MySQL",
        icon: <SiMysql className="h-12 w-12 text-primary" />,
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql className="h-12 w-12 text-primary" />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="h-12 w-12 text-primary" />,
      },
      {
        title: "Firebase",
        icon: <SiFirebase className="h-12 w-12 text-primary" />,
      },
      {
        title: "Supabase",
        icon: <SiSupabase className="h-12 w-12 text-primary" />,
      },
      {
        title: "Redis",
        icon: <SiRedis className="h-12 w-12 text-primary" />,
      },
      {
        title: "DynamoDB",
        icon: <SiAmazondynamodb className="h-12 w-12 text-primary" />,
      },
      {
        title: "Realm",
        icon: <SiRealm className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        title: "iOS",
        icon: <SiApple className="h-12 w-12 text-primary" />,
      },
      {
        title: "Android",
        icon: <SiAndroid className="h-12 w-12 text-primary" />,
      },
      {
        title: "React Native",
        icon: <SiReact className="h-12 w-12 text-primary" />,
      },
      {
        title: "Flutter",
        icon: <SiFlutter className="h-12 w-12 text-primary" />,
      },
      {
        title: "Ionic",
        icon: <SiIonic className="h-12 w-12 text-primary" />,
      },
      {
        title: "Swift",
        icon: <SiSwift className="h-12 w-12 text-primary" />,
      },
      {
        title: "Kotlin",
        icon: <SiKotlin className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        title: "Figma",
        icon: <SiFigma className="h-12 w-12 text-primary" />,
      },
      {
        title: "Photoshop",
        icon: <SiAdobephotoshop className="h-12 w-12 text-primary" />,
      },
      {
        title: "Illustrator",
        icon: <SiAdobeillustrator className="h-12 w-12 text-primary" />,
      },
      {
        title: "Canva",
        icon: <SiCanva className="h-12 w-12 text-primary" />,
      },
    ],
  },
  {
    title: "Devops",
    items: [
      {
        title: "AWS",
        icon: <SiAmazonwebservices className="h-12 w-12 text-primary" />,
      },
      {
        title: "Google Cloud",
        icon: <SiGooglecloud className="h-12 w-12 text-primary" />,
      },
      {
        title: "Vercel",
        icon: <SiVercel className="h-12 w-12 text-primary" />,
      },
      {
        title: "Digital Ocean",
        icon: <SiDigitalocean className="h-12 w-12 text-primary" />,
      },
      {
        title: "Docker",
        icon: <SiDocker className="h-12 w-12 text-primary" />,
      },
      {
        title: "Kubernetes",
        icon: <SiKubernetes className="h-12 w-12 text-primary" />,
      },
      {
        title: "Terraform",
        icon: <SiTerraform className="h-12 w-12 text-primary" />,
      },
      {
        title: "Hetzner",
        icon: <SiHetzner className="h-12 w-12 text-primary" />,
      },
    ],
  },
];

const HomeTechnologies = () => {
  return (
    <div className="bg-background py-24">
      <div className="container mx-auto">
        <h3 className="text-center text-5xl font-bold text-primary">
          Technologies we work with
        </h3>
        <div className="mt-12">
          <Tabs className="!w-full" defaultValue={technologies[0].title}>
            <TabsList className="h-auto w-full flex-wrap rounded-none bg-background">
              {technologies.map((tech) => (
                <TabsTrigger
                  key={tech.title}
                  className="rounded-none border-b-2 px-8 py-3 text-lg text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
                  value={tech.title}
                >
                  {tech.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {technologies.map((tech) => (
              <TabsContent key={tech.title} value={tech.title}>
                <div className="flex w-full flex-row flex-wrap justify-center gap-16 pt-12">
                  {tech.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex w-[120px] cursor-pointer flex-col items-center gap-4"
                    >
                      {item.icon}
                      <div className="text-center font-medium text-muted-foreground">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomeTechnologies;
