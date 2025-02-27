import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header skeleton */}
        <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>

        {/* Blog post skeletons */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-4 border border-gray-200 rounded-lg p-6">
            {/* Title skeleton */}
            <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>

            {/* Date skeleton */}
            <div className="h-4 w-1/4 bg-gray-200 rounded-md animate-pulse"></div>

            {/* Content paragraphs */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            {/* Read more button */}
            <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}