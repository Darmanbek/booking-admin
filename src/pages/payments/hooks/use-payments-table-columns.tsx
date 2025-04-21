import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { Payment, useDeletePaymentsMutation } from "src/services/payments"
import { useTranslation } from "src/shared/hooks"
import { DeleteButton } from "src/widgets/delete-button"
import { EditButton } from "src/widgets/edit-button"

export const usePaymentsTableColumns = () => {
	const { t } = useTranslation()

	const { mutate: deletePayment } = useDeletePaymentsMutation()

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
		},
		{
			fixed: "right",
			width: 100,
			title: "",
			key: "action",
			render: (_v, record) => (
				<Space>
					<EditButton params={record} />
					<DeleteButton
						data={t(record?.name)}
						onConfirm={() => {
							deletePayment(record?.id)
						}}
					/>
				</Space>
			)
		}
	]

	return columns
}
