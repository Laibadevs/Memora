import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";
import NextMeetingCard from "../../components/dashboard/Meeting/NextMeeting";
import PresentationCard from "../../components/dashboard/Presenation/PresenationCard";
import StatsGrid from "../../components/dashboard/stats/StatsGrid";
import TodayAgenda from "../../components/dashboard/Agenda/TodayAgenda";
import AIAssistant from "../../components/dashboard/Assistant/AIAssistant";
import RecentMeetings from "../../components/dashboard/Meeting/RecentMeeting";
import RecentMemories from "../../components/dashboard/Memories/RecentMemories";
import RecentActivity from "../../components/dashboard/Activity/RecentActivity";
// import QuickActions from "../components/dashboard/QuickAction/QuickAction";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="grid gap-4 2xl:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
                {/* main column */}
                <div className="grid min-w-0 gap-4">
                    <div className="grid gap-4 xl:grid-cols-2">
                        <NextMeetingCard />
                        <PresentationCard />
                    </div>

                    <StatsGrid />

                    <div className="grid gap-4 xl:grid-cols-3">
                        <RecentMeetings />
                        <RecentMemories />
                        <RecentActivity />
                    </div>

                    {/* <QuickActions /> */}
                </div>

                {/* right rail */}
                <div className="grid min-w-0 content-start gap-4">
                    <TodayAgenda />
                    <AIAssistant />
                </div>
            </div>
        </DashboardLayout>
    );
}
