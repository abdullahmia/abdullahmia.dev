import Link from "next/link";
import AllProjects from "./components/all-projects";

const ProjectsPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-[#101011]">
      <section className="flex items-center justify-between px-5 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          All Projects
        </h2>
        <Link
          href="/admin/projects/create"
          className="px-4 py-2 bg-[#4595D0] text-white rounded"
        >
          Create Project
        </Link>
      </section>

      <AllProjects />
    </main>
  );
};

export default ProjectsPage;
