import { createFileRoute } from "@tanstack/react-router"
import { LocationsPage } from "src/pages/locations"

export const Route = createFileRoute("/_layout/_hotels-layout/locations")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<LocationsPage />
		</>
	)
}
