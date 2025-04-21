import type {
	GetParams,
	ParamId,
	Response,
	ResponseSingleData
} from "src/services/shared"
import { api, classic } from "src/shared/api"
import { LocationCity, LocationCityChange } from "./locations.types"

class LocationsService {
	getCities = async (
		params: GetParams = {}
	): Promise<Response<LocationCity>> => {
		const response = await classic.get(`/locations/countries/1/cities`, {
			params
		})
		return response.data
	}

	getCitiesBySlug = async (
		slug: ParamId
	): Promise<ResponseSingleData<LocationCity>> => {
		const response = await classic.get(`/locations/countries/1/cities/${slug}`)
		return response.data
	}

	createCities = async (
		form: LocationCityChange
	): Promise<ResponseSingleData<LocationCity>> => {
		const response = await api.post(`/locations/countries/1/cities`, form)
		return response.data
	}

	editCities = async (
		form: LocationCityChange
	): Promise<ResponseSingleData<LocationCity>> => {
		const response = await api.put(
			`/locations/countries/1/cities/${form.id}`,
			form
		)
		return response.data
	}

	deleteCities = async (
		id: ParamId
	): Promise<ResponseSingleData<LocationCity>> => {
		const response = await api.delete(`/locations/countries/1/cities/${id}`)
		return response.data
	}
}

export const locationsService = new LocationsService()
