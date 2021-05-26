export const ADD_PHOTOS = "ADD_PHOTOS"
export const SET_TOTAL_PHOTO_COUNT ="SET_TOTAL_PHOTO_COUNT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export type PhotosReducerTypesInitialState = {
    photos: Array<any>
    pagesSize: number
    totalPhotoCount: number
    currentPage: number
}

export type AddPhotosACType = {
    type: typeof ADD_PHOTOS,
    photos: Array<any>
}

export type SetTotalPhotoCountACType = {
    type: typeof SET_TOTAL_PHOTO_COUNT
    totalPhotoCount: number
}

export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}


