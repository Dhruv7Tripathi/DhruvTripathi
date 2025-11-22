"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <div className="w-full overflow-x-auto px-2 sm:px-4">
      <div className="min-w-full">
        <GitHubCalendar
          username="dhruv7tripathi"
          blockSize={10}
          blockMargin={3}
          fontSize={14}
          colorScheme="dark"
          style={{
            maxWidth: '100%',
          }}
        />
      </div>
    </div>
  );
}