import type { GetParams, ParamId } from "src/services/shared"
import { useCrudMutation, useCrudQuery } from "src/shared/api"
import { amenitiesService } from "./amenities.service"
import type { HotelAmenityChange } from "./amenities.types"

const useGetAmenitiesQuery = (
	type: "hotel" | "room" = "hotel",
	params: GetParams = {}
) => {
	return useCrudQuery({
		queryFn: () => amenitiesService.get(type, params),
		queryKey: ["amenities", `${type}-amenities`, ...Object.values(params)]
	})
}

const useGetHotelAmenitiesQuery = (
	hotelSlug: ParamId,
	params: GetParams = {}
) => {
	return useCrudQuery({
		queryFn: () => amenitiesService.getByHotel(hotelSlug, params),
		queryKey: ["amenities", hotelSlug, ...Object.values(params)],
		enabled: !!hotelSlug
	})
}

const useCreateAmenitiesMutation = (type: "hotel" | "room" = "hotel") => {
	return useCrudMutation({
		mutationFn: (form: HotelAmenityChange) =>
			amenitiesService.create(type, form),
		invalidate: {
			queryKey: ["amenities", `${type}-amenities`]
		}
	})
}

const useEditAmenitiesMutation = (type: "hotel" | "room" = "hotel") => {
	return useCrudMutation({
		mutationFn: (form: HotelAmenityChange) => amenitiesService.edit(type, form),
		invalidate: {
			queryKey: ["amenities", `${type}-amenities`]
		}
	})
}

const useDeleteAmenitiesMutation = (type: "hotel" | "room" = "hotel") => {
	return useCrudMutation({
		mutationFn: (id: ParamId) => amenitiesService.delete(type, id),
		invalidate: {
			queryKey: ["amenities", `${type}-amenities`]
		}
	})
}

const useCreateHotelAmenitiesMutation = (
	type: "hotel" | "room" = "hotel",
	categoryId: ParamId
) => {
	return useCrudMutation({
		mutationFn: (variables: HotelAmenityChange) =>
			amenitiesService.createAmenities(type, categoryId, variables),
		invalidate: {
			queryKey: ["amenities", `${type}-amenities`]
		}
	})
}

const useEditHotelAmenitiesMutation = (type: "hotel" | "room" = "hotel") => {
	return useCrudMutation({
		mutationFn: (form: HotelAmenityChange) =>
			amenitiesService.editAmenities(type, form),
		invalidate: {
			queryKey: ["amenities", `${type}-amenities`]
		}
	})
}

const useDeleteHotelAmenitiesMutation = (type: "hotel" | "room" = "hotel") => {
	return useCrudMutation({
		mutationFn: (id: ParamId) => amenitiesService.deleteAmenities(type, id),
		invalidate: {
			queryKey: ["amenities"]
		}
	})
}

export {
	useGetAmenitiesQuery,
	useGetHotelAmenitiesQuery,
	useCreateAmenitiesMutation,
	useEditAmenitiesMutation,
	useDeleteAmenitiesMutation,
	useCreateHotelAmenitiesMutation,
	useEditHotelAmenitiesMutation,
	useDeleteHotelAmenitiesMutation
}
