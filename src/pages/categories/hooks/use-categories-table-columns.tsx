import type { ColumnsType } from "antd/es/table"
import { type Category } from "src/services/categories"
import { useTranslation } from "src/shared/hooks"

export const useCategoriesTableColumns = () => {
	const { t } = useTranslation()

	const columns: ColumnsType<Category> = [
		{
			width: 50,
			ellipsis: false,
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
