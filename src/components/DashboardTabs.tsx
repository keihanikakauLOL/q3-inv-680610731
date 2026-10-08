import { useState } from "react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState<"overview" | "category">("overview");

  return (
    <div className="w-full space-y-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`py-2.5 px-4 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "overview"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("category")}
          className={`py-2.5 px-4 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "category"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          By Category
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "overview" ? <OverviewCards /> : <CategoryCards />}
      </div>
    </div>
  );
}
