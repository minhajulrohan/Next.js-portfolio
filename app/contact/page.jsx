"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Phone",
    des: "+88 01580361156",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    des: "minhajulislamrohan123@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Address",
    des: "Home Town Kurigram, Rangpur-Bangladesh",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">lets Work</h3>
              <p className="text-white/60">.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="your name" />
                <Input type="text" placeholder="your Subject" />
                <Input type="text" placeholder="whatsApp Number" />
                <Input type="email" placeholder="your email" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est1">Web Development</SelectItem>
                    <SelectItem value="est2">UI/UX Design</SelectItem>
                    <SelectItem value="est3">SEO</SelectItem>
                    <SelectItem value="est4">Digital marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div>
                <Textarea placeholder="Type your message here" />
              </div>
              <Button size="md" className="max-w-40 h-[40px]" type="submit">Send Message</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col items-center xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.id} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[52px] bg-[#27272c] rounded-md flex items-center justify-center text-xl text-accent">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-white/60 text-md">{item.title}</h4>
                    <p className="text-white text-xl font-semibold">{item.des}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;


