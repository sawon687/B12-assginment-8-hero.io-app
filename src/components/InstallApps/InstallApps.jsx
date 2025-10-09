import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import InstallApp from "../InstallApp/InstallApp";

const InstallApps = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [installed, setInstalledApps] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("InstalledApps")) || [];
    setInstalledApps(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = installed.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("InstalledApps", JSON.stringify(updated));
  };

  useEffect(() => {
    if (sortOrder === "price-low") {
      setInstalledApps((prev) => [...prev].sort((a, b) => a.size - b.size));
    } else if (sortOrder === "price-high") {
      setInstalledApps((prev) => [...prev].sort((a, b) => b.size - a.size));
    } else {
      const saved = JSON.parse(localStorage.getItem("InstalledApps")) || [];
      setInstalledApps(saved);
    }
  }, [sortOrder]);

  const getSortLabel = () => {
    switch (sortOrder) {
      case "price-low":
        return "Low to High";
      case "price-high":
        return "High to Low";
      default:
        return "Sort By Size";
    }
  };

  return (
    <div className="px-20">
      <div className="pt-20">
        <h1 className="text-4xl text-[#001931] text-center font-bold">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <h1 className="font-bold text-2xl">
          ({installed.length}) Apps Found
        </h1>

        <details className="dropdown">
          <summary className="btn m-1 flex items-center">
            {getSortLabel()} <FaCaretDown className="ml-2" />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 p-2 shadow">
            <li>
              <button onClick={() => setSortOrder("price-low")}>
                Low to High
              </button>
            </li>
            <li>
              <button onClick={() => setSortOrder("price-high")}>
                High to Low
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div className="space-y-4 mt-5">
        {installed.length > 0 ? (
          installed.map((app) => (
            <InstallApp key={app.id} app={app} onRemove={handleRemove} />
          ))
        ) : (
          <p className="text-center text-gray-500">No installed apps found.</p>
        )}
      </div>
    </div>
  );
};

export default InstallApps;
