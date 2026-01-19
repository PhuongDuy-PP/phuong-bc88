import React, { useState } from 'react'
import Header from './Header'
import PhoneItem from './PhoneItem'
import PhoneDetail from './PhoneDetail'
import PopupCart from './PopupCart'

const dataPhone = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2, Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "/imgPhone/vsphone.jpg"
    },
    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "/imgPhone/meizuphone.jpg"
    },
    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "/imgPhone/applephone.jpg"
    }
]

const PhoneParent = () => {
    // phoneList
    const [phoneList, setPhoneList] = useState(dataPhone)

    // phoneDetail
    // ban đầu chưa hiển thị phone detail nên chưa có dữ liệu (null)
    const [phoneDetail, setPhoneDetail] = useState(null)

    // ẩn hiện modal detail
    const [isModalOpen, setIsModalOpen] = useState(false)

    // ẩn hiện modal cart
    const [isCartOpen, setIsCartOpen] = useState(false)

    // đếm số lượng sản phẩm trong giỏ hàng
    const [cartCount, setCartCount] = useState(0)

    // listCart
    const [listCart, setListCart] = useState([])

    const handleShowDetail = (phone) => {
        setPhoneDetail(phone)
        setIsModalOpen(true)
    }

    const handleCloseDetail = () => {
        setIsModalOpen(false)
        setPhoneDetail(null)
    }

    const handleAddToCart = (phone) => {
        let newListCart = [...listCart] // copy mảng cũ sang mảng mới
        newListCart.push(phone) // thêm sản phẩm vào mảng mới
        setListCart(newListCart) // cập nhật lại state listCart
        
        // tăng số lượng giỏ hàng
        setCartCount(newListCart.length)

    }

    const handleShowCartList = () => {
        setIsCartOpen(true)
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <Header countCart={cartCount} showCartList={handleShowCartList} />

            {/* list phone item */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    phoneList.map((phone) => {
                        return (
                            <PhoneItem 
                                key={phone.maSP}
                                product={phone} // props

                                showDetail={handleShowDetail} // lifting state up
                                addToCart={handleAddToCart} // lifting state up
                            />
                        )
                    })
                }
            </div>


            {/* phone detail modal */}
            {
                isModalOpen && (
                    <PhoneDetail
                        product={phoneDetail} //props

                        onClose={handleCloseDetail} // lifting state up
                    />
                )
            }

            {/* cart modal */}
            {
                isCartOpen && (
                    <PopupCart listCart={listCart} />
                )
            }
        </div>

    )
}

export default PhoneParent