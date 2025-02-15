"use client";
import Graph from "../components/Graph";
import Title from "../components/Title";
import TotalSellers from "../components/TotalSellers";
const Dashboard = () => {
  return (
    <>
      <div className="p-5">
        <Title>Dashboard</Title>
        <TotalSellers />
        <Graph
          registrationDate="2024-01-01"
          salesData={[
            { date: "2024-01-01", amount: 100 },
            { date: "2024-01-02", amount: 200 },
          ]}
        />
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
