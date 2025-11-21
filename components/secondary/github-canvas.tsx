"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-full">
        <GitHubCalendar username="dhruv7tripathi" />
      </div>
    </div>

  );
}
