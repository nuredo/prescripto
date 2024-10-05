import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10 '>
            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*----left section --*/}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quaerat accusantium aperiam maiores
                        eveniet, iusto consequuntur voluptatem rem aspernatur similique dolore
                        fugit unde, ducimus, eligendi nihil sit veritatis voluptatum exercitationem culpa.


                    </p>
                </div>
                {/*----center section --*/}
                <div className=''>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <NavLink onClick={() => { window.scroll(0, 0) }} to='/' ><p className=''>Home</p></NavLink>
                        <NavLink onClick={() => { window.scroll(0, 0) }} to='/doctors' ><p className=''>All Doctors</p></NavLink>
                        <NavLink onClick={() => { window.scroll(0, 0) }} to='/about' ><p className=''>About</p></NavLink>
                        <NavLink onClick={() => { window.scroll(0, 0) }} to='/contact' ><p className=''>Contact</p></NavLink>
                    </ul>
                </div>
                {/*----Right section --*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>hammednuredo@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/*----copyright text --*/}
            <div>
                <hr />
                <p className='text-center text-sm py-5' >copyright 2024 prescripto -All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
