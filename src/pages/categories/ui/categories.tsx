import { Tabs } from "antd"
import { type FC } from "react"
import { CategoriesTable } from "./tables"

const Categories: FC = () => {
	return (
		<>
			<Tabs
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
