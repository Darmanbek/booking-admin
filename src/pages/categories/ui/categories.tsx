import { Tabs } from "antd"
import { type FC, useState } from "react"
import { CategoriesForm } from "./forms"
import { CategoriesTable } from "./tables"

const Categories: FC = () => {
	const [type, setType] = useState<"hotels" | "rooms">("hotels")

	return (
		<>
			<CategoriesForm type={type} />
			<Tabs
				activeKey={type}
				onChange={(key) => setType(key as "hotels" | "rooms")}
				items={[
					{
						key: "hotels",
						label: "Для отелей",
						children: <CategoriesTable type={"hotel-categories"} />
					},
					{
						key: "rooms",
						label: "Для комнат",
						children: <CategoriesTable type={"room-types"} />
					}
				]}
			/>
		</>
	)
}

export { Categories }
