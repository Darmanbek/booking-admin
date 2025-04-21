import { categoriesService } from "src/services/categories/categories.service"
import { CategoryChange } from "src/services/categories/categories.types"
import type { GetParams, ParamId } from "src/services/shared"
import { useCrudMutation, useCrudQuery } from "src/shared/api"

const useGetCategoriesQuery = (
	type: "hotel-categories" | "room-types" = "hotel-categories",
	params: GetParams = {}
) => {
	return useCrudQuery({
		queryFn: () => categoriesService.get(type, params),
		queryKey: ["categories", type, ...Object.values(params)]
	})
}

const useCreateCategoriesMutation = (
	type: "hotel-categories" | "room-types" = "hotel-categories"
) => {
	return useCrudMutation({
		mutationFn: (form: CategoryChange) => categoriesService.create(type, form),
		invalidate: {
			queryKey: ["categories", type]
		}
	})
}

const useEditCategoriesMutation = (
	type: "hotel-categories" | "room-types" = "hotel-categories"
) => {
	return useCrudMutation({
		mutationFn: (form: CategoryChange) => categoriesService.edit(type, form),
		invalidate: {
			queryKey: ["categories", type]
		}
	})
}

const useDeleteCategoriesMutation = (
	type: "hotel-categories" | "room-types" = "hotel-categories"
) => {
	return useCrudMutation({
		mutationFn: (id: ParamId) => categoriesService.delete(type, id),
		invalidate: {
			queryKey: ["categories", type]
		}
	})
}

export {
	useGetCategoriesQuery,
	// useGetCategoriesByIdQuery,
	useCreateCategoriesMutation,
	useEditCategoriesMutation,
	useDeleteCategoriesMutation
}
