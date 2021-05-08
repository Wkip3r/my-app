const ADD_PHOTOS = "ADD_PHOTOS"
const SET_TOTAL_PHOTO_COUNT ="SET_TOTAL_PHOTO_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

let initialState = {
    photos: [],
    pagesSize: 5,
    totalPhotoCount: 0,
    currentPage: 0
}


const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: action.photos
            }
            break
        case SET_TOTAL_PHOTO_COUNT:
            return {
                ...state,
                totalPhotoCount: action.totalPhotoCount
            }
            break
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
    }
    return state
}

export const addPhotosAC = (photos) => {
    return {
        type: ADD_PHOTOS,
        photos: photos
    }
}

export const setTotalPhotoCountAC = (totalPhotoCount) => {
    return {
        type: SET_TOTAL_PHOTO_COUNT,
        totalPhotoCount: totalPhotoCount
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export default photosReducer