import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

  const pagesPerBlock = 12
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLength = Math.ceil(pagesLength / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePage = currentPage => {
    setPage(currentPage)
  }

  return (

    pagesLength === 0 ? <div></div> :
      <div className='pagination'>
        {
          page > 1 &&
          <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
        }
        <ul className='pagination__container'>
          {
            arrPages.map(e => (
              <li
                className={`pagination__page ${page === e && 'pagination__active'}`}
                onClick={() => handlePage(e)}
                key={e}>
                {e}
              </li>
            ))
          }
        </ul>
        {
          page < pagesLength &&
          <div onClick={handleNext} className='pagination__next pagination__active'>&#62;</div>
        }
      </div>
  )
}

export default Pagination