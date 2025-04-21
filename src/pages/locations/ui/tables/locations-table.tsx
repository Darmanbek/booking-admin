import { type FC, useState } from "react"
import { useLocationsTableColumns } from "src/pages/locations/hooks"
import { type LocationCity, useGetLocationsQuery } from "src/services/locations"
import { Table } from "src/shared/ui"
import { AddButton } from "src/widgets/add-button"

const LocationsTable: FC = () => {
	const [params, setParams] = useState({
		page: 1,
		pageSize: 10
	})
	const {
		data: locations,
		isLoading,
		isFetching
	} = useGetLocationsQuery({
		page: params?.page,
		page_size: params?.pageSize
	})

	const columns = useLocationsTableColumns()
	return (
		<>
			<Table<LocationCity>
				rowKey={"id"}
				dataSource={locations?.data}
				extra={<AddButton />}
				loading={isLoading || isFetching}
				title={"Направления"}
				columns={columns}
				pagination={{
					total: locations?.pagination?.total,
					current: params?.page,
					pageSize: params?.pageSize,
					onChange: (page, pageSize) => {
						setParams({ page, pageSize })
					}
				}}
			/>
		</>
	)
}

export { LocationsTable }
