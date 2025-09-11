import { useState, useEffect, useMemo } from "react";
import JobListingCard from "./JobListingCard";
import SearchBar from "./Searchbar";

const JobListings = ({ isHome, jobs, setJobs }) => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setJobs(data.jobs);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, [setJobs]);

  const filteredJobs = useMemo(() => {
    if (!query) return jobs;
    const q = query.toLowerCase();
    return jobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(q) ||
        job.location?.toLowerCase().includes(q) ||
        job.company?.name?.toLowerCase().includes(q)
      );
    });
  }, [jobs, query]);

  return (
    <section className="bg-blue-50 dark:bg-gray-950 transition-colors duration-500 ease-in-out px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-gray-200 mb-6 text-center transition-colors duration-500">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {/* Search Input */}
        <div className="mb-6">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            filteredJobs
              .slice(0, isHome ? 3 : filteredJobs.length)
              .map((job) => {
                const isExpanded = expandedJobId === job.id;
                const desc = isExpanded
                  ? job.description
                  : job.description.slice(0, 90) + "...";

                return (
                  <JobListingCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    type={job.type}
                    description={desc}
                    salary={job.salary}
                    location={job.location}
                    showFullJob={isExpanded}
                    onclick={() =>
                      setExpandedJobId(isExpanded ? null : job.id)
                    }
                  />
                );
              })
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
