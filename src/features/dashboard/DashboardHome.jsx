import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentTasks from "@/components/dashboard/RecentTasks";
import EarningsChart from "@/components/dashboard/EarningsChart";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

export default function DashboardHome() {

  return (

    <section className="min-h-screen flex">

      <DashboardSidebar />



      <div className="flex-1 p-10">

        <DashboardTopbar />


        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <StatsCard

            title="Total Earnings"

            value="$12,450"

          />


          <StatsCard

            title="Active Projects"

            value="08"

          />


          <StatsCard

            title="Completed"

            value="128"

          />

        </div>

         {/* Recent Tasks */}

       <RecentTasks />

       <EarningsChart />

       <ActivityTimeline />

      </div>

    </section>

  );

}