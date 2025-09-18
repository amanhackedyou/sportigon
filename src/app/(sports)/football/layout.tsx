import { FootballMatchProvider } from "@/context/Sports/Football/MatchContext"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <FootballMatchProvider>
            {children}
        </FootballMatchProvider>
    </section>
}