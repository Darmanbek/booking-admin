import type { GetParams, ParamId } from "src/services/shared"
import { useCrudMutation, useCrudQuery } from "src/shared/api"
import { locationsService } from "./locations.service"

const useGetLocationsQuery = (params: GetParams = {}) => {
	return useCrudQuery({
		queryFn: () => locationsService.getCities(params),
		queryKey: ["locations", ...Object.values(params)]
	})
}

const useGetLocationBySlugQuery = (slug: ParamId) => {
	return useCrudQuery({
		queryFn: () => locationsService.getCitiesBySlug(slug),
		queryKey: ["locations", slug],
		enabled: !!slug
	})
}

const useCreateLocationQuery = () => {
	return useCrudMutation({
		mutationFn: locationsService.createCities,
		invalidate: {
			queryKey: ["locations"]
		}
	})
}

const useEditLocationQuery = () => {
	return useCrudMutation({
		mutationFn: locationsService.editCities,
		invalidate: {
			queryKey: ["locations"]
		}
	})
}

const useDeleteLocationQuery = () => {
	return useCrudMutation({
		mutationFn: locationsService.deleteCities,
		invalidate: {
			queryKey: ["locations"]
		}
	})
}

export {
	useGetLocationsQuery,
	useGetLocationBySlugQuery,
	useCreateLocationQuery,
	useEditLocationQuery,
	useDeleteLocationQuery
}
