// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa6";
// import { BiLogoMongodb } from "react-icons/bi";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { FaNodeJs } from "react-icons/fa";
// import { LiaUserSecretSolid } from "react-icons/lia";
// import imgs from '../assets/user.png'

// const Hero = () => {
//     return (
//         <div className="hero border ">
//             <div className="horoContent container mx-auto p-4 py-15 h-[90vh]  md:flex items-center">
//                 <div className="heroleft  md:w-[60%] ">

//                     <div className="lefttopcontent space-y-2">
//                         <h1 className='text-xl font-bold'>Welcome to My Feed</h1>
//                         <h1 className='text-2xl font-bold'>Hello, I'am a Developer|
//                         </h1>
//                         <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio veniam ipsum nemo perspiciatis reprehenderit! Omnis inventore itaque eum impedit ipsa ex ab, quasi harum aperiam, vel adipisci amet deserunt.

//                         </p>
//                     </div>

//                     <div className="bottomicon md:flex pt-5 md:justify-between md:pt-15  ">
//                         <div className="leftbottomcontent ">
//                             <div className="mediaicon  py-2">
//                                 <h1 className='text-2xl font-bold  py-2'>Available on</h1>
//                                 <div className='flex gap-2 text-xl '>
//                                     <FaFacebookF />
//                                     <FaLinkedinIn />
//                                     <AiOutlineYoutube />
//                                     <FaInstagram />
//                                 </div>


//                             </div>
//                         </div>
//                         <div className="rightbottomcontent">
//                             <div className="mediaicon ">
//                                 <h1 className='text-xl font-bold py-2' >Currently Working On</h1>

//                                 <div className='flex gap-2 text-2xl'>
//                                     <BiLogoMongodb />
//                                     <SiExpress />
//                                     <FaReact />
//                                     <FaNodeJs />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="heroright md:py-10 md:w-[40%] ">
//                     <div className="rightimg  ">
//                         <img src={imgs} alt="" className='' />

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero

import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { LiaUserSecretSolid } from "react-icons/lia";
import imgs from '../assets/user.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="hero overflow-hidden" id='Hero'> {/* Added overflow-hidden */}
            <div className="heroContent container mx-auto p-4 py-15 h-auto md:h-[90vh] md:flex items-center"> {/* Changed h-[90vh] to h-auto for mobile */}
                <div className="heroleft md:w-[60%] order-1 md:order-none"> {/* Added order for mobile layout */}

                    <div className="lefttopcontent space-y-2" >
                        <h1 className='text-xl font-bold'>Welcome to My Feed</h1>
                        <h1 className='text-2xl font-bold'>Hello, I'am a

                            <span className='text-red-500'>

                                <TypeAnimation
                                className='text-red-500'
                                    preRenderFirstString={true}
                                    sequence={[
                                        500,
                                        '', // initially rendered starting point
                                        1000,
                                        ' Developer',
                                        1000,
                                        ' Programmer',
                                        1000,
                                        ' Coder',
                                        500,
                                    ]}
                                    speed={50}
                                    style={{ fontSize: '2rem', fontWeight: 'bold', color: '' }}
                                    repeat={Infinity}
                                />
                            </span>

                        </h1>



                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio veniam ipsum nemo perspiciatis reprehenderit! Omnis inventore itaque eum impedit ipsa ex ab, quasi harum aperiam, vel adipisci amet deserunt.</p>
                    </div>

                    <div className="bottomicon md:flex pt-5 md:justify-between md:pt-15">
                        <div className="leftbottomcontent ">
                            <div className="mediaicon ">
                                <h1 className='text-sm font-bold  '>Available On</h1>
                                <div className='flex gap-2 text-xl py-2 text-purple-600 '>
                                    <FaLinkedinIn className='hover:text-purple-900 cursor-pointer ' />
                                    <AiOutlineYoutube className='hover:text-purple-900 cursor-pointer ' />
                                    <FaInstagram className='hover:text-purple-900 cursor-pointer ' />
                                    <FaFacebookF className='hover:text-purple-900 cursor-pointer ' />


                                </div>
                            </div>
                        </div>
                        <div className="rightbottomcontent">
                            <div className="mediaicon ">
                                <h1 className='text-sm font-bold '>Currently On</h1>
                                <div className='flex gap-2 text-xl py-2 text-purple-600 '>
                                    <BiLogoMongodb className='hover:text-purple-900 cursor-pointer  ' />
                                    <SiExpress className='hover:text-purple-900 cursor-pointer ' />
                                    <FaReact className='hover:text-purple-900 cursor-pointer ' />
                                    <FaNodeJs className='hover:text-purple-900 cursor-pointer ' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="heroright md:py-10 md:w-[40%] order-0 md:order-none flex justify-center"> {/* Added flex and justify-center */}
                    <div className="rightimg max-w-[300px] md:max-w-full mx-auto"> {/* Added max-width constraints */}
                        <img
                            src={imgs}
                            alt="Developer portrait"
                            className='w-full h-auto object-contain '
                        />
                    </div>
                </div>
            </div>
           
        </div>
    
    )
}

export default Hero