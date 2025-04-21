import { Tabs } from "antd"
import { type FC, useState } from "react"
import { AmenitiesForm, CategoryAmenitiesForm } from "./forms"
import { AmenitiesTable } from "./tables"

const Amenities: FC = () => {
	const [type, setType] = useState<"hotels" | "rooms">("hotels")

	return (
		<>
			<AmenitiesForm type={type} />
			<CategoryAmenitiesForm type={type} />
			<Tabs
				activeKey={type}
				onChange={(key) => setType(key as "hotels" | "rooms")}
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
