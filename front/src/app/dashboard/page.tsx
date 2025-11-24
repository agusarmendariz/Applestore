import DashboardView from "@/view/Dashboard";
import ProtectedRoutes from "@/components/ProtectedRoutes";

export default function DashboardPage() {
    return (
        <div>
            <ProtectedRoutes>
            <DashboardView />
            </ProtectedRoutes>
        </div>
    );
}