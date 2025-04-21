import type { ColumnsType } from "antd/es/table"
import { type Amenity } from "src/services/amenities"
import { useTranslation } from "src/shared/hooks"

export const useAmenitiesTableColumns = () => {
	const { t } = useTranslation()

	const columns: ColumnsType<Amenity> = [
		{
			width: 80,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1
		},
		{
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: t
		}
	]

	return columns
}
