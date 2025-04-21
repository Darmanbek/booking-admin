import { createFileRoute } from "@tanstack/react-router"
import { CategoriesPage } from "src/pages/categories"

export const Route = createFileRoute("/_layout/_hotels-layout/categories")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<CategoriesPage />
		</>
	)
}
