import { RetweetOutlined, RightOutlined, TeamOutlined } from "@ant-design/icons"
import { Link, useParams } from "@tanstack/react-router"
import { Button, Card, Flex, Image, List, Space, Tag, Typography } from "antd"
import { type FC } from "react"
import type { Room } from "src/services/rooms"
import { useToken, useTranslation } from "src/shared/hooks"
import {
	formatNumber,
	formatPriceWithCurrency
} from "src/shared/utils/format.utils"

const { Text, Title } = Typography

interface HotelListItemProps {
	data?: Room
}

const RoomsListItem: FC<HotelListItemProps> = ({ data: room }) => {
	const { t } = useTranslation()
	const { hotelSlug } = useParams({
		from: "/_layout/hotels/$hotelSlug/_hotel-layout/rooms/"
	})

	const { token } = useToken()
	return (
		<Card
			style={{
				marginBottom: 20,
				overflow: "hidden"
			}}
			styles={{
				body: {
					padding: 0
				}
			}}
		>
			<List.Item style={{ padding: 0, alignItems: "stretch" }}>
				<Flex style={{ position: "relative", padding: 12 }}>
					<Image
						width={164}
						height={164}
						style={{
							aspectRatio: 1,
							borderRadius: token.borderRadiusLG,
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
						fallback={"https://placehold.co/120x120"}
						alt={t(room?.room_type)}
						src={room?.images?.[0]?.image}
					/>
				</Flex>
				<Flex
					vertical={true}
					justify={"space-between"}
					gap={20}
					style={{ padding: 20, paddingLeft: 8, flexGrow: 1 }}
				>
					<Flex justify={"space-between"}>
						<Flex vertical={true} align={"start"}>
							<Title level={4}>{t(room?.room_type)}</Title>
							<Space size={2}>
								<Tag
									color={"green"}
									style={{ fontSize: "inherit" }}
									icon={<RetweetOutlined />}
								>
									{`${formatNumber(room?.room_area)?.toFixed(1)} м²`}
								</Tag>
								<Tag
									color={"blue"}
									style={{ fontSize: "inherit" }}
									icon={<TeamOutlined />}
								>
									{`Макс. гостей: ${room?.max_guests || 0}`}
								</Tag>
							</Space>
							<Title level={5}>
								Количество: {formatNumber(room?.quantity)}
							</Title>
						</Flex>
					</Flex>
					<Flex justify={"space-between"} align={"end"}>
						<Flex vertical={true}>
							<Title level={4} style={{ margin: 0 }}>
								От {formatPriceWithCurrency(room?.base_price)}
							</Title>
							<Text type={"secondary"}>за ночь для 1 гостя</Text>
						</Flex>
						<Link
							to={"/hotels/$hotelSlug/rooms/$roomId"}
							params={{
								hotelSlug,
								roomId: `${room?.id}`
							}}
						>
							<Button
								type={"primary"}
								iconPosition={"end"}
								icon={<RightOutlined />}
							>
								Открыть
							</Button>
						</Link>
					</Flex>
				</Flex>
			</List.Item>
		</Card>
	)
}

export { RoomsListItem }
