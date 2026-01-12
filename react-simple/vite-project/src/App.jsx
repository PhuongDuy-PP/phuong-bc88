import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import DataBindingEx1 from './bindingData/DataBindingEx1'
import DataBindingEx2 from './bindingData/DataBindingEx2'
import EventHandlingEx1 from './eventHandling/EventHandlingEx1'
import EventHandlingEx2 from './eventHandling/EventHandlingEx2'
import EventHandlingEx3 from './eventHandling/EventHandlingEx3'
import UseStateEx1 from './hook/useState/UseStateEx1'
import UseStateEx2 from './hook/useState/UseStateEx2'
import CarColorEx from './hook/useState/CarColorEx'
import Glasses from './btvn-state-25/Glasses'

// LƯU Ý: sau này thêm component vào đây
const App = () => {
    return (
        <div>
            {/* cơ bản về component */}
            {/* <Header />
            <div className='h-screen flex'>
                <Navigation />
                <Content />
            </div>
            <Footer /> */}

            {/* binding data */}
            {/* ví dụ 1: input binding */}
            {/* <DataBindingEx1 /> */}

            {/* ví dụ 2: hiển thị danh sách sinh viên */}
            {/* <DataBindingEx2 /> */}

            {/* Event handling */}
            {/* ví dụ 1: thay đổi số đếm */}
            {/* <EventHandlingEx1 /> */}

            {/* ví dụ 2: form submit */}
            {/* <EventHandlingEx2 /> */}

            {/* ví dụ 3: other event */}
            {/* <EventHandlingEx3 /> */}

            {/* hook: useState */}
            {/* <UseStateEx1 /> */}
            {/* <UseStateEx2 /> */}
            {/* <CarColorEx /> */}

            <Glasses />
        </div>
    )
}

export default App