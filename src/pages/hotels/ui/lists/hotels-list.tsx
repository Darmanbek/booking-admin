import { List, Typography } from "antd"
import { type FC } from "react"
import { type Hotel, useGetHotelsQuery } from "src/services/hotels"
import { HotelsListItem } from "./hotels-list-item"

const { Title } = Typography

const HotelsList: FC = () => {
	const { data: hotels, isLoading, isFetching } = useGetHotelsQuery()

	return (
		<>
			<List<Hotel>
				rowKey={"id"}
				loading={isLoading || isFetching}
				header={<Title level={3}>Все отели</Title>}
				pagination={{
					pageSize: 5
				}}
				itemLayout={"horizontal"}
				dataSource={hotels?.data}
				renderItem={(hotel, index) => (
					<HotelsListItem data={hotel} key={index} />
				)}
			/>
		</>
	)
}

export { HotelsList }
