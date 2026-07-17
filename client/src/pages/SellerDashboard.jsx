import SellerLayout from "../layouts/SellerLayout";
import WelcomeBanner from "../components/WelcomeBanner";
import OpportunityFeed from "../components/OpportunityFeed";
import BusinessHealth from "../components/BusinessHealth";
import RecentLiveSessions from "../components/RecentLiveSessions";
import GrowthScore from "../components/GrowthScore";

function SellerDashboard() {
  return (
    <SellerLayout>
      <WelcomeBanner />

      <OpportunityFeed />

      <BusinessHealth />

      <RecentLiveSessions />

      <GrowthScore />
    </SellerLayout>
  );
}

export default SellerDashboard;