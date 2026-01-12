import React, { useState } from 'react'
import ShoeItem from './ShoeItem'
import dataShoe from '../../../data/data_product.json'
import ShoeModal from './ShoeModal';

const ShoeList = () => {
    // useState để handle ẩn-hiện modal
    const [isSelected, setIsSelected] = useState(false);

    // state để nhận dữ liệu từ component con gửi lên
    const [shoeDetail, setShoeDetail] = useState({});

    const handleShowDetail = (shoe) => {
        console.log('Show details for:', shoe);
        // component cha sẽ nhận shoe và set state là true để hiện modal
        setShoeDetail(shoe);
        setIsSelected(true);
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            dataShoe.map((shoe) => {
                return(
                    <ShoeItem key={shoe.id} shoe={shoe} onShowDetail={handleShowDetail} />
                )
            })
        }

        {/* thêm modal */}
        {
            isSelected && (
                <ShoeModal shoe={shoeDetail} />
            )
        }
    </div>
  )
}

export default ShoeList