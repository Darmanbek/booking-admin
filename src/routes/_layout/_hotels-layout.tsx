import { createFileRoute, Outlet } from "@tanstack/react-router"
import { MainContent, Menubar } from "src/shared/layout"
import { Container } from "src/shared/ui"

export const Route = createFileRoute("/_layout/_hotels-layout")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Menubar />
			<MainContent>
				<Container>
					<Outlet />
				</Container>
			</MainContent>
		</>
	)
}
