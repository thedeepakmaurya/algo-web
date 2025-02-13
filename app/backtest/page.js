import PlChart from "@/ui/charts/PlChart";
import ProfitLossChart from "@/ui/charts/ProfitLossChart";
import BackTester from "@/ui/sections/BackTester"
import BacktestSummary from "@/ui/sections/BacktestSummary";
import TransactionDetails from "@/ui/sections/TransactionDetails";

const BackTest = () => {
    return (
        <div className="flex flex-col gap-6">
            <BackTester />
            <PlChart />
            <BacktestSummary />
            <ProfitLossChart />
            <TransactionDetails />
        </div>
    )
}

export default BackTest;