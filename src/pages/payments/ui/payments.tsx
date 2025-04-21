import { type FC } from "react"
import { PaymentsForm } from "./forms"
import { PaymentsTable } from "./tables"

const Payments: FC = () => {
	return (
		<>
			<PaymentsForm />
			<PaymentsTable />
		</>
	)
}

export { Payments }
