import { Tabs } from "antd"
import { type FC } from "react"
import { AmenitiesTable } from "./tables"

const Amenities: FC = () => {
	return (
		<>
			<Tabs
				items={[
					{
						key: "hotels",
						label: "Для отелей",
						children: <AmenitiesTable type={"hotel"} />
					},
					{
						key: "rooms",
						label: "Для комнат",
						children: <AmenitiesTable type={"room"} />
					}
				]}
			/>
		</>
	)
}

export { Amenities }
