import { createFileRoute } from "@tanstack/react-router"
import { PaymentsPage } from "src/pages/payments"

export const Route = createFileRoute("/_layout/_hotels-layout/payments")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<PaymentsPage />
		</>
	)
}
