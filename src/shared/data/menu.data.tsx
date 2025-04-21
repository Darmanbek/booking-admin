import {
	AppstoreAddOutlined,
	DollarOutlined,
	HomeOutlined,
	InboxOutlined,
	SwapOutlined,
	TagsOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number] & {
	key: string
}

export const hotelMenuData: MenuItem[] = [
	{
		key: "/hotels/$hotelSlug",
		icon: <HomeOutlined />,
		label: "Отель"
	},
	{
		key: "/hotels/$hotelSlug/rooms",
		icon: <InboxOutlined />,
		label: "Номера"
	}
]

export const menuData: MenuItem[] = [
	{
		key: "/hotels",
		icon: <HomeOutlined />,
		label: "Отели"
	},
	{
		key: "/amenities",
		icon: <TagsOutlined />,
		label: "Удобства и услуги"
	},
	{
		key: "/categories",
		icon: <AppstoreAddOutlined />,
		label: "Категории"
	},
	{
		key: "/locations",
		icon: <SwapOutlined />,
		label: "Направления"
	},
	{
		key: "/payments",
		icon: <DollarOutlined />,
		label: "Способы оплаты"
	}
]
