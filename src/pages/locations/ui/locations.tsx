import { type FC } from "react"
import { LocationsForm } from "./forms"
import { LocationsTable } from "./tables"

const Locations: FC = () => {
	return (
		<>
			<LocationsForm />
			<LocationsTable />
		</>
	)
}

export { Locations }
