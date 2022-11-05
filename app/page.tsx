import { PageHeader } from "~/page-header";
import { ProjectsCard } from "~/projects-card";
import { ResourcesCard } from "~/resources-card";
import { ServicesCard } from "~/services-card";
import { Stack } from "~/ui/layout";

export default function HomePage() {
  return (
    <Stack gap={32}>
      <div className="my-32">
        <PageHeader />
      </div>

      {/* <ServicesCard /> */}

      <ResourcesCard />

      <ProjectsCard />
    </Stack>
  );
}
