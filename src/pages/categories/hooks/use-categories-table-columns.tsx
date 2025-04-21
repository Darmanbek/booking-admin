import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import {
	type Category,
	useDeleteCategoriesMutation
} from "src/services/categories"
import { useTranslation } from "src/shared/hooks"
import { DeleteButton } from "src/widgets/delete-button"
import { EditButton } from "src/widgets/edit-button"

export const useCategoriesTableColumns = (
	type: "hotel-categories" | "room-types"
) => {
	const { t } = useTranslation()

	const { mutate: deleteCategory } = useDeleteCategoriesMutation(type)

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
		},
		{
			align: "center",
			fixed: "right",
			width: 100,
			title: "",
			key: "action",
			render: (_v, record) => (
				<Space>
					<EditButton
						children={""}
						params={record}
						type={"default"}
						variant={"solid"}
						color={"orange"}
					/>
					<DeleteButton
						data={t(record?.name)}
						onConfirm={() => {
							deleteCategory(record?.id)
						}}
					/>
				</Space>
			)
		}
	]

	return columns
}
