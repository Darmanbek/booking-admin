import { type FC } from "react"
import { useCategoriesTableColumns } from "src/pages/categories/hooks"
import { type Category, useGetCategoriesQuery } from "src/services/categories"
import { Table } from "src/shared/ui"
import { AddButton } from "src/widgets/add-button"

interface CategoriesTableProps {
	type: "hotel-categories" | "room-types"
}

const CategoriesTable: FC<CategoriesTableProps> = ({
	type = "hotel-categories"
}) => {
	const {
		data: categories,
		isLoading,
		isFetching
	} = useGetCategoriesQuery(type)

	const columns = useCategoriesTableColumns(type)
	return (
		<>
			<Table<Category>
				rowKey={"id"}
				dataSource={categories?.data}
				extra={<AddButton />}
				loading={isLoading || isFetching}
				title={"Категории"}
				columns={columns}
			/>
		</>
	)
}

export { CategoriesTable }
