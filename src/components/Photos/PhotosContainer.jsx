import {connect} from "react-redux";
import Photos from "./Photos";
import {addPhotosAC, setCurrentPageAC,setTotalPhotoCountAC } from "../../redux/photosReducer"


const mapStateToProps = (state) => {
    return {
        photos: state.photo.photos,
        pagesSize: state.photo.pagesSize,
        totalPhotoCount: state.photo.totalPhotoCount,
        currentPage: state.photo.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPhotos: (photos) => {
            dispatch(addPhotosAC(photos))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalPhotoCount: (totalPhotoCount) => {
            dispatch(setTotalPhotoCountAC(totalPhotoCount))
        }
    }
}

const photosContainer = connect(mapStateToProps,mapDispatchToProps)(Photos)

export default photosContainer