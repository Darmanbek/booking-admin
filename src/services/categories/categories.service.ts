import type {
	GetParams,
	ParamId,
	ResponseData,
	ResponseSingleData
} from "src/services/shared"
import { api } from "src/shared/api"
import type { Category, CategoryChange } from "./categories.types"

class CategoriesService {
	get = async (
		type: "hotel-categories" | "room-types" = "hotel-categories",
		params: GetParams = {}
	): Promise<ResponseData<Category>> => {
		const response = await api.get(`/${type}`, { params })
		return response.data
	}

	// getById = async (id: unknown): Promise<ResponseSingleData<void>> => {
	// 	const response = await api.get(`/categories/${id}`)
	// 	return response.data
	// }

	create = async (
		form: CategoryChange
	): Promise<ResponseSingleData<Category>> => {
		const response = await api.post(`/hotel-categories`, form)
		return response.data
	}

	edit = async (
		form: CategoryChange
	): Promise<ResponseSingleData<Category>> => {
		const response = await api.put(`/hotel-categories/${form.id}`, form)
		return response.data
	}

	delete = async (id: ParamId): Promise<ResponseSingleData<void>> => {
		const response = await api.delete(`/hotel-categories/${id}`)
		return response.data
	}
}

export const categoriesService = new CategoriesService()
