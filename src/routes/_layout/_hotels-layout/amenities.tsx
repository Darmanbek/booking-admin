import { createFileRoute } from "@tanstack/react-router"
import { AmenitiesPage } from "src/pages/amenities"

export const Route = createFileRoute("/_layout/_hotels-layout/amenities")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<AmenitiesPage />
		</>
	)
}
