"use client"

import {FaGithub , FaXTwitter, FaLinkedin, FaFacebook} from "react-icons/fa"

const Footers = () => {
  return (
    <section>
    <div className="container mx-auto">
      <div className="flex">
        <div>
         <div className-="flex flex-col">
          <FaGithub />
          <FaXTwitter />
          <FaLinkedin />
          <FaFacebook />
         </div>
        </div>
        <div></div>
      </div>
      </div>
    </section>
    )
}

export default Footers
