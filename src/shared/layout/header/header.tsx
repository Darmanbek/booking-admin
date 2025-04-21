import { Link, useParams } from "@tanstack/react-router"
import { Divider, Flex, Space } from "antd"
import { useResponsive } from "antd-style"
import { Header as LayoutHeader } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title"
import { type FC } from "react"
import { useGetHotelsBySlugQuery } from "src/services/hotels"
import { useAuth, useToken, useTranslation } from "src/shared/hooks"
import { Logo } from "src/widgets/logo"
import { LangSelect } from "./lang-select"
import { ProfileAvatar } from "./profile-avatar"

interface HeaderProps {
	auth?: boolean
}

const Header: FC<HeaderProps> = ({ auth }) => {
	const { token } = useToken()
	const { hotelSlug } = useParams({
		strict: false
	})
	const { t } = useTranslation()
	const { isAuth } = useAuth()
	const { mobile = false } = useResponsive()
	const {
		data: hotel,
		isLoading,
		isFetching
	} = useGetHotelsBySlugQuery(hotelSlug)

	return (
		<LayoutHeader
			style={{
				backgroundColor: token.colorBgContainer,
				paddingInline: token.paddingLG,
				whiteSpace: "nowrap"
			}}
		>
			<Flex align={"center"} gap={8} justify={"space-between"}>
				<Space>
					<Link to={"/hotels"}>
						<Logo collapsed={mobile} />
					</Link>
					{hotel && hotelSlug && (
						<>
							<Divider type={"vertical"} />
							<Title level={4}>
								Отель:{" "}
								{isLoading || isFetching ? "Загрузка" : t(hotel?.data?.name)}
							</Title>
						</>
					)}
				</Space>

				<Space>
					<LangSelect />
					{isAuth || auth ? (
						<Space>
							<ProfileAvatar />
						</Space>
					) : null}
				</Space>
			</Flex>
		</LayoutHeader>
	)
}

export { Header }
