import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDocs] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)

            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])
    return (
        <div className='flex flex-col items-center gap-4 my-16  md:mx-10 text-gray-800' >
            <h1 className='text-3xl font-medium'>Related Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
                {
                    relDoc.slice(0, 5).map((item, index) => (
                        <div onClick={() => { navigate(`/appointment/${item._id}`); window.scroll(0, 0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500' key={index}>
                            <img className='bg-blue-50' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-gray-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => { navigate('/doctors'); }} className=' bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
        </div>
    )
}

export default RelatedDoctors
