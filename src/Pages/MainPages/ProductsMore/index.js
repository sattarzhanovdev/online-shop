import React from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../../API'
import More from '../../../Components/More'

const ProductsMore = () => {
  const { id } = useParams()
  const [ base, setBase ] = React.useState(null)

  React.useEffect(() => {
    API.getProductsMore(id)
      .then(res => setBase(res.data))
  }, [id])

  return (
    <div>
      <More item={base} />
    </div>
  )
}

export default ProductsMore