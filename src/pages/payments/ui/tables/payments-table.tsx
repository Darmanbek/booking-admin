import { type FC } from "react"
import { usePaymentsTableColumns } from "src/pages/payments/hooks"
import { Payment, useGetPaymentsQuery } from "src/services/payments"
import { Table } from "src/shared/ui"

const PaymentsTable: FC = () => {
	const { data: payments, isLoading, isFetching } = useGetPaymentsQuery()

	const columns = usePaymentsTableColumns()
	return (
		<>
			<Table<Payment>
				dataSource={payments?.data}
				loading={isLoading || isFetching}
				title={"Способы оплаты"}
				columns={columns}
			/>
		</>
	)
}

export { PaymentsTable }
