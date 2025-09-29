import { FootballMatchProvider } from "@/context/Sports/Football/MatchContext";
export default function DashboardLayout({ children, }) {
    return <section>
        <FootballMatchProvider>
            {children}
        </FootballMatchProvider>
    </section>;
}
//# sourceMappingURL=layout.jsx.map