import { type FC, useMemo } from "react"
import { useAmenitiesTableColumns } from "src/pages/amenities/hooks"
import { type Amenity, useGetAmenitiesQuery } from "src/services/amenities"
import { Table } from "src/shared/ui"

interface AmenitiesTableProps {
	type: "hotel" | "room"
}

const AmenitiesTable: FC<AmenitiesTableProps> = ({ type = "hotel" }) => {
	const { data: amenities, isLoading, isFetching } = useGetAmenitiesQuery(type)

	const amenitiesData = useMemo(() => {
		if (!amenities) return []
		if (type === "room") {
			let key = 0
			return amenities?.data?.map((el) => ({
				...el,
				key: key++,
				children: el.room_amenities
			}))
		}
		let key = 0
		return amenities?.data?.map((el) => ({
			...el,
			key: key++,
			children: el.hotel_amenities
		}))
	}, [amenities, type])

	const columns = useAmenitiesTableColumns()
	return (
		<>
			<Table<Amenity>
				rowKey={"key"}
				loading={isLoading || isFetching}
				dataSource={amenitiesData}
				title={"Удобства и услуги"}
				columns={columns}
			/>
		</>
	)
}

export { AmenitiesTable }
