"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useEffect, useRef, useState } from "react";

type Project = {
  id: number;
  projectName: string;
  description: string;
  Short_Screen_Shot: string;
  tags: string[];
  Live_Link: string;
  GitHub_Client_Side_Link: string;
  category: string;
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend_based", label: "Frontend" },
  { id: "backend_based", label: "Backend" },
  { id: "full_stack_based", label: "Full Stack" },
];

const ProjectsSection = memo(function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [100, 0, 0, 100], [0, 0.2, 0.8, 1]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://mahfuz-s-portfolio-website-server.vercel.app/projects"
      );
      if (!response.ok) {
        setError(true);
        setErrorMessage("Failed to fetch projects");
        return;
      }
      const data = await response.json();
      setProjects(data);
    } catch (err: any) {
      console.error("Error fetching projects:", err);
      setError(true);
      setErrorMessage(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6); // 2 more rows
  };

  // const filteredProjects = useCallback(
  //   () =>
  //     activeCategory === "all"
  //       ? projects
  //       : projects.filter((p) => p.category === activeCategory),
  //   [activeCategory, projects]
  // )();

  // const loadMore = () => {
  //   setVisibleCount((prev) => prev + 6); // 2 more rows
  // };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-16 sm:py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-accent/30 blur-3xl dark:bg-accent/10" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-2 flex items-center gap-2"
          >
            <div className="h-[1px] w-5 bg-primary"></div>
            <span className="text-primary">My Work</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 flex flex-wrap justify-center gap-2 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleCount(6); // Reset visible count on category change
                }}
                className="rounded-full text-xs sm:text-sm"
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Conditional Rendering States */}
        {loading && (
          <div className="col-span-full flex justify-center items-center py-12">
            <span className="text-muted-foreground animate-pulse">
              Loading projects...
            </span>
          </div>
        )}

        {error && (
          <div className="col-span-full flex flex-col justify-center items-center gap-2 py-12">
            <span className="text-destructive font-medium">
              {errorMessage}
            </span>
          </div>
        )}

        {!loading && !error && filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-12">
            No projects found in this category.
          </div>
        )}

        {!loading && !error && (
          <>
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8"
              style={{ opacity, y }}
            >
              {filteredProjects
                .slice(0, visibleCount)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </motion.div>

            {visibleCount < filteredProjects.length && (
              <div className="mt-10 flex justify-center">
                <Button onClick={loadMore} className="rounded-full">
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
});

const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-primary/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project?.Short_Screen_Shot || "/placeholder.svg"}
          alt={project?.projectName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="mb-2 text-lg font-bold sm:text-xl">
          {project?.projectName}
        </h3>
        <p className="mb-4 text-xs text-muted-foreground sm:text-sm">
          {project?.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
          {project?.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-[10px] px-2 py-0 sm:text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 sm:gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 text-xs h-8 sm:text-sm"
          >
            <Link
              href={project?.GitHub_Client_Side_Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
              Code
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="rounded-full bg-primary/80 hover:bg-primary text-xs h-8 sm:text-sm"
          >
            <Link
              href={project?.Live_Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectsSection;
