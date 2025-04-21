import { useParams } from "@tanstack/react-router"
import { Card, Col, Empty, Flex, Image, Row } from "antd"
import { type FC } from "react"
import { useGetHotelsImagesBySlugQuery } from "src/services/hotels"

const HotelImagesCard: FC = () => {
	const { hotelSlug } = useParams({
		from: "/_layout/hotels/$hotelSlug"
	})

	const { data: hotelImages, isLoading } =
		useGetHotelsImagesBySlugQuery(hotelSlug)

	return (
		<>
			<Card loading={isLoading} title={"Фотографии отеля"}>
				{hotelImages?.data?.length ? (
					<Image.PreviewGroup>
						<Row wrap={true} gutter={8} style={{ rowGap: 8 }}>
							{hotelImages?.data?.map((item, index) => (
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

export { HotelImagesCard }
