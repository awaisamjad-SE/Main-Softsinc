import { useState } from "react";

export default function Dashboard() {
  const [webId, setWebId] = useState("");
  const [password, setPassword] = useState("");
  const [analytics, setAnalytics] = useState([]);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/analytics/?web_id=${webId}&password=${password}`);
      const data = await res.json();
      if (res.status !== 200) throw new Error(data.error);
      setAnalytics(data.data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const totalClicks = analytics.reduce((sum, a) => sum + (a.clicks || 0), 0);
  const totalTime = analytics.reduce((sum, a) => sum + (a.timeOnPage || 0), 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Website Analytics Dashboard</h1>

      <div className="flex gap-4 mb-4">
        <input
          placeholder="Web ID"
          value={webId}
          onChange={(e) => setWebId(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border p-2 rounded w-1/2"
        />
        <button onClick={fetchAnalytics} className="bg-blue-600 text-white px-4 py-2 rounded">Load</button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {analytics.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-4 text-center my-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Total Visits</h2>
              <p className="text-xl">{analytics.length}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Total Clicks</h2>
              <p className="text-xl">{totalClicks}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Total Time Spent (s)</h2>
              <p className="text-xl">{totalTime}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Visitors by Location</h3>
            <ul className="list-disc pl-6">
              {[...new Set(analytics.map(a => `${a.locationInfo?.city || 'Unknown'}, ${a.locationInfo?.country || ''}`))].map((loc, i) => (
                <li key={i}>{loc}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Device Types</h3>
            <ul className="list-disc pl-6">
              {[...new Set(analytics.map(a => a.deviceType || "Unknown"))].map((dev, i) => (
                <li key={i}>{dev}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
