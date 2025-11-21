"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <div className="mt-10 over">
      <h2 className="text-2xl font-semibold mb-4">Commit Canvas</h2>
      <GitHubCalendar username="dhruv7tripathi" />
    </div>
  );
}
