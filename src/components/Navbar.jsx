// import React from 'react'

// import { FaLinkedin ,FaGithub,FaInstagram} from 'react-icons/fa';


// const Navbar = () => {
//   return (
//     <nav className=" mb-10 flex items-center justify-between  my-5  ">
//       <div className="flex flex-shrink-0 items-center">
//         <h1 className="text-2xl">RK</h1>
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl md:p-3 p-2 rounded-full bg-gradient-to-r from-purple-600  to-black hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]  transition-shadow duration-500 ease-in-out">
//         <a
//           className="md:p-2 hover:text-black"
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.linkedin.com/in/rajkiran-ramesh-527a96300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           className="md:p-2 hover:text-black"
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://share.google/LalTzIQs3wb3RldR1"
//         >
//           <FaGithub />
//         </a>
//         <a
//           className="md:p-2 hover:text-black"
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.instagram.com/raj_s_m_i_l_e?igsh=MTlhNnY4czl0NjBsag=="
//         >
//           <FaInstagram />
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar




import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between my-5 px-4 md:px-10">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold text-white">RK</h1>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl md:p-3 p-2 rounded-full bg-gradient-to-r from-purple-600 to-black hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow duration-500 ease-in-out">
        <a
          className="md:p-2 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rajkiran-ramesh-527a96300/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FaLinkedin />
        </a>
        <a
          className="md:p-2 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Rajkiran1408"
        >
          <FaGithub />
        </a>
        <a
          className="md:p-2 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/raj_s_m_i_l_e/"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
