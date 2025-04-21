import type { ColumnsType } from "antd/es/table"
import { Payment } from "src/services/payments"
import { useTranslation } from "src/shared/hooks"

export const usePaymentsTableColumns = () => {
	const { t } = useTranslation()

	const columns: ColumnsType<Payment> = [
		{
			width: 50,
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
		}
	]

	return columns
}
