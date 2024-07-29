"use client";

import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formdata = new FormData();
    formdata.append("from", email);
    formdata.append("subject", subject);
    formdata.append("to", JSON.stringify({ to: email, placeholders: { firstName: name } }));
    formdata.append("text", `Hi ${name}, this is a test message from Infobip. Have a nice day!`);
    
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App 8bc6db351a4c91e32d90ebb668f2a598-21dd9e48-38a8-444e-8e1c-3e32fb7573d9");
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };
    
    try {
        const response = await fetch("https://8gep2r.api.infobip.com/email/3/send", requestOptions);
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            setStatus('Message sent!');
            setName('');
            setSubject('');
            setNumber('');
            setEmail('');
            setService('');
            setMessage('');
        } else {
            const error = await response.text();
            console.error(error);
            setStatus('Failed to send message.');
        }
    } catch (error) {
        console.error(error);
        setStatus('Failed to send message.');
    }
  };

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
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-3xl text-accent">lets Work</h3>
              <p className="text-white/60"></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="your Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="whatsApp Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div>
                <Textarea
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button size="md" className="max-w-40 h-[40px]" type="submit">
                Send Message
              </Button>

              <p>{status}</p>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-center xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.id} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[52px] bg-[#27272c] rounded-md flex items-center justify-center text-md text-accent">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white/60 text-md">{item.title}</h4>
                    <p className="text-white text-md font-semibold">{item.des}</p>
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
