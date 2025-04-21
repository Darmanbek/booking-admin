import { paymentsService } from "src/services/payments/payments.service"
import { GetParams } from "src/services/shared"
import { useCrudMutation, useCrudQuery } from "src/shared/api"

const useGetPaymentsQuery = (params: GetParams = {}) => {
	return useCrudQuery({
		queryFn: () => paymentsService.get(params),
		queryKey: ["payments", ...Object.values(params)]
	})
}

const useCreatePaymentsMutation = () => {
	return useCrudMutation({
		mutationFn: paymentsService.create,
		invalidate: {
			queryKey: ["payments"]
		}
	})
}

const useEditPaymentsMutation = () => {
	return useCrudMutation({
		mutationFn: paymentsService.edit,
		invalidate: {
			queryKey: ["payments"]
		}
	})
}

const useDeletePaymentsMutation = () => {
	return useCrudMutation({
		mutationFn: paymentsService.delete,
		invalidate: {
			queryKey: ["payments"]
		}
	})
}

export {
	useGetPaymentsQuery,
	useCreatePaymentsMutation,
	useEditPaymentsMutation,
	useDeletePaymentsMutation
}
