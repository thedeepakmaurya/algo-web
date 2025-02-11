import PlChart from "@/ui/charts/PlChart";
import BackTester from "@/ui/sections/BackTester"

const BackTest = () => {
    return (
        <div className="flex flex-col gap-6">
        <BackTester />
        <PlChart/>
        </div>
    )
}

export default BackTest;