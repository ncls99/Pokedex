import React from 'react'

const Pagination = ({page, pagesLength}) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength =  Math.ceil(pagesLength/pagesPerBlock)

        const arrPages = []
        const initialPage =(currentBlock -1) * pagesPerBlock + 1
        const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
        for(let i = initialPage; i <= limitPage; i++){
            arrPages.push(i)
        }

  return (
    <div>Pagination
        
    </div>
  )
}

export default Pagination