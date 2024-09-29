import React from 'react'
import Coming from '../images/Coming.png'
import { eventsList } from '../constants'
const Schedule = () => {
    return (
        <section className='w-full flex flex-col items-center md:pb-20'>
            <div className="w-[70%] bg-zinc-900 shadow-xl shadow-green-700">
                <div className=" bg-green-600 py-3">
                    <h2 className='group-date'>October 2024</h2>
                </div>
                <div className="timeline">
                    {eventsList.map((item, index) => {
                        return (
                            <div className="relative md:flex items-center md:gap-[2vw] block" key={index}>
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>{item.eventTime}</span>
                                    <h3 className='timeline-title'>{item.eventName}</h3>
                                    <p className='text-white'>{item.eventDescription}</p>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden my-[4vh]">
                                    <img src={Coming} alt="" className='w-full object-cover' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Schedule