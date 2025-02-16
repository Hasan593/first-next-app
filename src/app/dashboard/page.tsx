import Banner from "@/components/Dashboard/Banner";
import Features from "@/components/Dashboard/Features";

const DashboardPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <Banner />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
      <Features />
    </div>
  );
};

export default DashboardPage;
