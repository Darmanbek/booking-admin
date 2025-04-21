import { PlusOutlined } from "@ant-design/icons"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import {
	type Amenity,
	useDeleteAmenitiesMutation,
	useDeleteHotelAmenitiesMutation
} from "src/services/amenities"
import { useTranslation } from "src/shared/hooks"
import { DeleteButton } from "src/widgets/delete-button"
import { EditButton } from "src/widgets/edit-button"

export const useAmenitiesTableColumns = (type: "hotel" | "room") => {
	const { t } = useTranslation()

	const { mutate: deleteAmenity } = useDeleteAmenitiesMutation(type)
	const { mutate: deleteHotelAmenity } = useDeleteHotelAmenitiesMutation(type)

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
		},
		{
			align: "center",
			fixed: "right",
			width: 100,
			title: "",
			key: "action",
			render: (_v, record) => (
				<Space>
					{record?.hotel_amenities || record?.room_amenities ? (
						<EditButton
							children={""}
							formKey={"primary"}
							params={record}
							icon={<PlusOutlined />}
							type={"primary"}
						/>
					) : null}
					<EditButton
						children={""}
						params={record}
						type={"default"}
						formKey={
							record?.hotel_amenities || record?.room_amenities
								? "main"
								: "primary"
						}
						variant={"solid"}
						color={"orange"}
					/>
					<DeleteButton
						data={t(record?.name)}
						onConfirm={() => {
							if (record?.hotel_amenities || record?.room_amenities) {
								deleteAmenity(record?.id)
								return
							}
							deleteHotelAmenity(record?.id)
						}}
					/>
				</Space>
			)
		}
	]

	return columns
}
