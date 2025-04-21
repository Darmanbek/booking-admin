import {
	Flex,
	Space,
	Table as AntdTable,
	TableProps as AntdTableProps,
	Typography
} from "antd"
import type { AnyObject } from "antd/es/_util/type"
import type { ReactNode } from "react"

export interface TableProps<T extends AnyObject>
	extends Omit<AntdTableProps<T>, "title"> {
	title: ReactNode
	extra?: ReactNode
}

const Table = <T extends AnyObject>({
	title,
	extra,
	...props
}: TableProps<T>) => {
	return (
		<AntdTable
			title={() => (
				<Flex gap={8} justify={"space-between"} align={"center"}>
					<Typography.Title level={5}>{title}</Typography.Title>
					<Space>{extra}</Space>
				</Flex>
			)}
			scroll={{
				x: "auto",
				...scroll
			}}
			{...props}
		/>
	)
}

export { Table }
