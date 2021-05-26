import {
    ADD_PHOTOS,
    AddPhotosACType,
    PhotosReducerTypesInitialState, SET_CURRENT_PAGE, SET_TOTAL_PHOTO_COUNT, SetCurrentPageACType,
    SetTotalPhotoCountACType
} from "../ReducerTypes/PhotosReducerTypes";

let initialState: PhotosReducerTypesInitialState = {
    photos: [],
    pagesSize: 5,
    totalPhotoCount: 0,
    currentPage: 0
}

const photosReducer = (state = initialState, action : any): PhotosReducerTypesInitialState => {
    switch (action.type) {
        case ADD_PHOTOS:
            return {...state, photos: action.photos }
            break
        case SET_TOTAL_PHOTO_COUNT:
            return {...state, totalPhotoCount: action.totalPhotoCount }
            break
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
    }
    return state
}

export const addPhotosAC = (photos : Array<any>): AddPhotosACType => {
    return {
        type: ADD_PHOTOS,
        photos: photos
    }
}

export const setTotalPhotoCountAC = (totalPhotoCount: number): SetTotalPhotoCountACType => {
    return {
        type: SET_TOTAL_PHOTO_COUNT,
        totalPhotoCount: totalPhotoCount
    }
}

export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export default photosReducer