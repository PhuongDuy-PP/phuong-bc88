import React, { useState } from 'react'
// import phones from '../data/phone/dataPhone.json'
import Header from './Header'
import PhoneItem from './PhoneItem'
import PhoneDetail from './PhoneDetail'
import PopupCart from './PopupCart'

const phones = [
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
  // State
  // 1. Tạo state lưu danh sách điện thoại từ dataPhone
  const [phoneList, setPhoneList] = useState(phones)

  // 2. tạo state lưu thông tin chi tiết về phone => PhoneDetail component
  // null -> mặc định ẩn modal PhoneDetail mỗi khi bắt đầu truy cập PhoneParent
  const [selectedPhone, setSelectedPhone] = useState(null)

  // 3. Tạo state để ẩn - hiện PhoneDetail component
  // false - ẩn
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  // 4. Tạo state lưu list cart trong giỏ hàng
  // dùng localStorage để load list carts
  const [cartList, setCartList] = useState([])

  // 5. Tạo state ẩn - hiện modal PopupCart
  const [isCartOpen, setIsCartOpen] = useState(false)

  // 6. lưu số lượng item cart
  const [countItemCart, setCountItemCart] = useState(0)

  // define function để nhận event từ PhoneItem component
  const handleShowDetail = (phone) => {
    console.log('phone được chọn', phone)
    setSelectedPhone(phone)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
    setSelectedPhone(null)
  }

  const handleAddToCart = (phone) => {
    // thêm phone vào cartList
    let newCartList = [...cartList] // copy toàn bộ nội dung cartList vào newCartList
    let isExist = false

    // duyệt từng item để kiểm tra sản phẩm đã tồn tại
    // Nếu item đa tồn tại trong giỏ hàng thì không thêm nữa, tăng quantity lên 1 đơn vị
    // nếu item chưa có trong list => push item vào listCart
    // => dùng for
    for(let i = 0; i < newCartList.length; i++) {
      if(newCartList[i].maSP === phone.maSP) {
        // tăng quantity lên 1 đơn vị
        // Do quantity chưa có trong data => thêm quantity vào
        // spread operator
        newCartList[i] = {
          ...newCartList[i],
          quantity: newCartList[i].quantity + 1
        }
        // => nếu data có quantity => cập nhật value của quantity
        // => nếu data chưa có quantity => tạo quantity trong data
        isExist = true
        break // thoát khỏi vòng lặp
      }
    }

    if(!isExist) {
      newCartList.push({...phone, quantity: 1}) // thêm phone vào newCartList với quantity = 1
    }

    setCartList(newCartList)

    // tạo state để lưu số lượng item có trong cartList
    setCountItemCart(countItemCart + 1)
    // mỗi khi thêm 1 item vào giỏ hàng thì số lượng +1

  }

  const handleShowCartList = () => {
    setIsCartOpen(true)
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  // phoneId: mã sản phẩm cần thay đổi số lượng
  // delta: +1 hoặc -1
  const handleChangeQuantity = (phoneId, delta) => {
    const newCartList = []
    let newCartCount = countItemCart

    for(let i = 0; i < cartList.length; i++) {
      const item = cartList[i]

      if(item.maSP === phoneId) {
        const newQuantity = item.quantity + delta

        // nếu quantity > 0 => giữ lại item trong cartList
        if(newQuantity > 0) {
          newCartList.push({
            ...item,
            quantity: newQuantity
          })
        }

        newCartCount = newCartCount + delta
      } else {
        newCartList.push(item)
      }
    }
    setCartList(newCartList)
    setCountItemCart(newCartCount)
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <Header countItemCart={countItemCart} cartList={cartList} showCartList={handleShowCartList} />

      {/* Phone List */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <PhoneItem />
                <PhoneItem />
                <PhoneItem />
                <PhoneItem />
                <PhoneItem />
            </div> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          phoneList.map((phone) => {
            return (
              <PhoneItem
                key={phone.maSP}
                product={phone}
                showDetail={handleShowDetail}
                addToCart={handleAddToCart}
              />
            )
          })
        }
      </div>

      {/* PhoneDetail */}
      {isDetailOpen && (
        <PhoneDetail onClose={handleCloseDetail} product={selectedPhone} />
      )}

      {/* PopupCart */}
      {
        isCartOpen && (
          <PopupCart
            cartList={cartList}
            onCloseCart={handleCloseCart}
            onChangeQuantity={handleChangeQuantity}
            countItemCart={countItemCart}
          />
        )
      }

    </div>
  )
}

export default PhoneParent