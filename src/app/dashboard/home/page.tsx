import DashboardLayout from "@/components/dashboard/dashboardlayout"

const Dashboard = () => {
    return (
        <>
            <DashboardLayout>
                <>
                    <div>
                        <div className="w-[70%] pt-20 mx-auto">
                            <div className="w-full rounded-lg h-[16rem] bg-[#F0884F]">
                                <div>
                                    <h3>Hello ieadeleke</h3>
                                    <p>Welcome to your dashboard</p>
                                    <button className="bg-white px-4 py-6 text-sm"></button>
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-3 gap-4">
                                <div className="w-full h-[7rem] rounded-lg border-2 border-[#F0884F] border-solid"></div>
                                <div className="w-full h-[7rem] rounded-lg border-2 border-[#F0884F] border-solid"></div>
                                <div className="w-full h-[7rem] rounded-lg border-2 border-[#F0884F] border-solid"></div>
                            </div>
                        </div>
                    </div>
                </>
            </DashboardLayout>
        </>
    )
}

export default Dashboard;