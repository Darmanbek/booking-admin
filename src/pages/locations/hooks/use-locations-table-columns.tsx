import type { ColumnsType } from "antd/es/table"
import { type LocationCity } from "src/services/locations"
import { useTranslation } from "src/shared/hooks"

export const useLocationsTableColumns = () => {
	const { t } = useTranslation()

	const columns: ColumnsType<LocationCity> = [
		{
			width: 50,
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
