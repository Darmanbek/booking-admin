import type {
	GetParams,
	ParamId,
	ResponseData,
	ResponseSingleData
} from "src/services/shared"
import { api } from "src/shared/api"
import type {
	Amenity,
	HotelAmenity,
	HotelAmenityChange
} from "./amenities.types"

class AmenitiesService {
	get = async (
		type: "hotel" | "room" = "hotel",
		params: GetParams = {}
	): Promise<ResponseData<Amenity>> => {
		const response = await api.get(`/${type}-amenities`, { params })
		return response.data
	}

	getByHotel = async (
		hotelSlug: ParamId,
		params: GetParams = {}
	): Promise<ResponseData<Amenity>> => {
		const response = await api.get(`/hotels/${hotelSlug}/amenities`, {
			params
		})
		return response.data
	}

	create = async (
		type: "hotel" | "room" = "hotel",
		form: HotelAmenityChange
	): Promise<ResponseSingleData<Amenity>> => {
		const response = await api.post(`/${type}-amenities/categories`, form)
		return response.data
	}

	edit = async (
		type: "hotel" | "room" = "hotel",
		form: HotelAmenityChange
	): Promise<ResponseSingleData<Amenity>> => {
		const response = await api.put(
			`/${type}-amenities/categories/${form.id}`,
			form
		)
		return response.data
	}

	delete = async (
		type: "hotel" | "room" = "hotel",
		id: ParamId
	): Promise<ResponseSingleData<void>> => {
		const response = await api.delete(`/${type}-amenities/categories/${id}`)
		return response.data
	}

	createAmenities = async (
		type: "hotel" | "room" = "hotel",
		categoryId: ParamId,
		form: HotelAmenityChange
	): Promise<ResponseSingleData<HotelAmenity>> => {
		const response = await api.post(
			`/${type}-amenities/categories/${categoryId}/amenities`,
			form
		)
		return response.data
	}

	editAmenities = async (
		type: "hotel" | "room" = "hotel",
		form: Record<string, unknown>
	): Promise<ResponseSingleData<HotelAmenity>> => {
		const response = await api.put(
			`/${type}-amenities/amenities/${form.id}`,
			form
		)
		return response.data
	}

	deleteAmenities = async (
		type: "hotel" | "room" = "hotel",
		id: ParamId
	): Promise<ResponseSingleData<void>> => {
		const response = await api.delete(`/${type}-amenities/amenities/${id}`)
		return response.data
	}
}

export const amenitiesService = new AmenitiesService()
