import { createFileRoute } from "@tanstack/react-router"
import { HotelsPage } from "src/pages/hotels"

export const Route = createFileRoute("/_layout/_hotels-layout/hotels_")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<HotelsPage />
		</>
	)
}
