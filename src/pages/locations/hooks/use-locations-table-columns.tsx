import { EnvironmentOutlined, HomeOutlined } from "@ant-design/icons"
import { Divider, Space } from "antd"
import Avatar from "antd/es/avatar"
import type { ColumnsType } from "antd/es/table"
import {
	type LocationCity,
	useDeleteLocationQuery
} from "src/services/locations"
import { useTranslation } from "src/shared/hooks"
import { DeleteButton } from "src/widgets/delete-button"
import { EditButton } from "src/widgets/edit-button"

export const useLocationsTableColumns = () => {
	const { t } = useTranslation()

	const { mutate: deleteLocation } = useDeleteLocationQuery()

	const columns: ColumnsType<LocationCity> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: (value, record) => (
				<Space>
					<Avatar
						shape={"square"}
						size={80}
						src={record?.image}
						icon={<HomeOutlined />}
					/>
					{t(value)}
				</Space>
			)
		},
		{
			title: "Локации",
			key: "location",
			render: (_v, record) => (
				<Space split={<Divider type={"vertical"} />}>
					<a
						href={`https://www.google.com/maps?q=${record?.geocode_lat} ${record.geocode_lng}`}
						target={"_blank"}
						onClick={(e) => e.stopPropagation()}
						rel={"nofollow"}
					>
						<Space>
							<EnvironmentOutlined />
							Центр города
						</Space>
					</a>
					<a
						href={`https://www.google.com/maps?q=${record?.aero_lat} ${record.aero_lng}`}
						target={"_blank"}
						onClick={(e) => e.stopPropagation()}
						rel={"nofollow"}
					>
						<Space>
							<EnvironmentOutlined />
							Аэропорт
						</Space>
					</a>
					<a
						href={`https://www.google.com/maps?q=${record?.rail_lat} ${record.rail_lng}`}
						target={"_blank"}
						onClick={(e) => e.stopPropagation()}
						rel={"nofollow"}
					>
						<Space>
							<EnvironmentOutlined />
							Вокзал
						</Space>
					</a>
				</Space>
			)
		},
		{
			align: "center",
			width: 100,
			title: "",
			key: "action",
			render: (_v, record) => (
				<Space>
					<EditButton
						children={""}
						type={"default"}
						variant={"solid"}
						color={"orange"}
						params={record}
					/>
					<DeleteButton
						data={t(record?.name)}
						onConfirm={() => {
							deleteLocation(record?.id)
						}}
					/>
				</Space>
			)
		}
	]

	return columns
}
