"use client";

import { useState } from 'react';

export default function RandomStringFetcher() {
  const [randomString, setRandomString] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRandomString = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/random-string');
      const data = await res.json();
      setRandomString(data.randomString);
    } catch (error) {
      console.error('Error fetching random string:', error);
      setRandomString('Error fetching random string');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={fetchRandomString}
        className="text-white-500 hover:underline"
      >
        Get Random String
      </button>
      {loading && <p>Loading...</p>}
      {randomString && !loading && (
        <p>The random string is: {randomString}</p>
      )}
    </div>
  );
}