import styles from './Paginator.module.css'
import React, {DOMElement, useState} from "react";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (text:number, pageSize: number ) => void
    portionSize: number
}

const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let [currentPortion, setCurrentPortion] = useState(0)

    const togglePage = (e: any) => {
        onPageChanged(+e.target.innerText, pageSize)
    }

    let portionPages = []

    if (totalUsersCount){
        for(let i = 1; i <= pagesCount; i++){
            let portion = []
                if(i % 10 === 0 && i !== 0){
                    for(let j = i - 9; j <= i; j++){
                        portion.push(j)
                    }
                    portionPages.push(portion)
                }
        }


        let flatArray: Array<any> = portionPages.flat(Infinity)

        let difference = pagesCount - flatArray[flatArray.length - 1]

        let portion = []
        for(let i = flatArray[flatArray.length - 1]; i <= flatArray[flatArray.length - 1] + difference; i++){
            portion.push(i)
        }

        portionPages.push(portion)


        return <div>
            <span>
                <button onClick={() => {
                    setCurrentPortion(currentPortion - 1)}}
                    disabled={currentPortion === 0}>Prev</button>

                {portionPages[currentPortion].map((p,i) => <span key={i} onClick={togglePage} className={styles.page}>{p}</span>)}


                <button onClick={() => {
                    setCurrentPortion(currentPortion + 1)}}
                    disabled={currentPortion === portionPages.length - 1}>Next</button>
            </span>
        </div>

    }

    return <div>
        <span>Load</span>
    </div>
}

export default Paginator