import { Payment, PaymentChange } from "src/services/payments/payments.types"
import type {
	GetParams,
	ParamId,
	ResponseData,
	ResponseSingleData
} from "src/services/shared"
import { api } from "src/shared/api"

class PaymentsService {
	get = async (params: GetParams = {}): Promise<ResponseData<Payment>> => {
		const response = await api.get(`/payment`, { params })
		return response.data
	}

	create = async (
		form: PaymentChange
	): Promise<ResponseSingleData<Payment>> => {
		const response = await api.post(`/payment`, form)
		return response.data
	}

	edit = async (form: PaymentChange): Promise<ResponseSingleData<void>> => {
		const response = await api.put(`/payment/${form.id}`, form)
		return response.data
	}

	delete = async (id: ParamId): Promise<ResponseSingleData<void>> => {
		const response = await api.delete(`/payment/${id}`)
		return response.data
	}
}

export const paymentsService = new PaymentsService()
