import { createFileRoute } from "@tanstack/react-router"
import { ProfilePage } from "src/pages/profile"

export const Route = createFileRoute("/_layout/_hotels-layout/profile")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<ProfilePage />
		</>
	)
}
