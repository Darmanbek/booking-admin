import { useParams } from "@tanstack/react-router"
import { Card, Col, Empty, Flex, Image, Row } from "antd"
import { type FC } from "react"
import { useGetRoomsImagesByIdQuery } from "src/services/rooms"

const RoomImagesCard: FC = () => {
	const { hotelSlug, roomId } = useParams({
		from: "/_layout/hotels/$hotelSlug/_hotel-layout/rooms/$roomId/"
	})

	const { data: roomImages, isLoading } = useGetRoomsImagesByIdQuery(
		hotelSlug,
		roomId
	)

	return (
		<>
			<Card loading={isLoading} title={"Фотографии номера"}>
				{roomImages?.data?.length ? (
					<Image.PreviewGroup>
						<Row wrap={true} gutter={8} style={{ rowGap: 8 }}>
							{roomImages?.data?.map((item, index) => (
								<Col key={index}>
									<Image
										src={item?.image}
										fallback={"https://placehold.co/110x110"}
										height={110}
										style={{ borderRadius: 8, objectFit: "cover" }}
										width={110}
										alt={"Photo"}
									/>
								</Col>
							))}
						</Row>
					</Image.PreviewGroup>
				) : (
					<Flex justify={"center"} align={"center"}>
						<Empty />
					</Flex>
				)}
			</Card>
		</>
	)
}

export { RoomImagesCard }
