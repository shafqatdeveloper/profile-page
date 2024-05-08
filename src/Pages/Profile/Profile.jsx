import React, { useState } from "react";
import profilePic from "../../Assets/profilePic.jpg";
import "./Profile.css";
import { IoIosCamera } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Modal from "react-modal";

const Profile = () => {
  const analyzes = [
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
    {
      createdAt: "05-08-2024",
      baseText: "this is the base text",
      uploadedBy: "johan koza",
      analyzedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis eaque perferendis reprehenderit sequi illum praesentium, minima reiciendis ratione voluptates eos necessitatibus commodi.",
    },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={`w-full h-full p-2 md:p-0 flex flex-col md:flex-row gap-4`}>
      {/* Profile Pic Opned */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-96 h-96">
          <img src={profilePic} alt="" className="w-full h-full" />
        </div>
      </Modal>
      {/*Profile SideBar */}
      <div className="w-auto md:w-[23%] h-full md:sticky top-0 md:ml-8">
        <div className="md:mt-8 w-full shadow-md shadow-[#9568fd] bg-black/90 relative text-white py-5 flex flex-col items-center border-[1px] border-black/25 rounded-md">
          <div className="w-16 h-20 bg-[#9568fd] right-0 top-8 absolute blur-2xl shadow-md"></div>
          <div className="w-8 h-20 bg-[#9568fd] left-0 bottom-8 absolute blur-2xl shadow-md"></div>
          <div className="md:w-32 w-20 border-[2px] border-white/65 relative rounded-full md:h-32 h-20 mt-10">
            <img
              src={profilePic}
              onClick={openModal}
              alt="Profile"
              className="w-full rounded-full cursor-pointer object-cover h-full"
            />
            <div className="bg-[#9568fd] p-1 sm:p-2 cursor-pointer text-white absolute right-0 bottom-[-3px] sm:right-4 rounded-full w-min">
              <IoIosCamera />
            </div>
          </div>
          <div className="py-8">
            <h1 className="uppercase text-2xl font-semibold font-sans">
              johan koza
            </h1>
            <h1 className="text-sm text-gray-400 text-center">
              johankoza@gmail.com
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-[#9568fd] w-32 py-1.5 text-white font-semibold">
              Edit Profile
            </button>
            <button className="bg-red-500 w-32 px-2 py-1.5 text-white font-semibold">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Analyzes */}
      <div className="w-full md:w-[55%] md:mt-8 flex flex-col gap-3 items-center">
        {analyzes.map((post, index) => {
          return (
            <div
              key={index}
              className="w-full bg-black/90 relative text-white p-3  flex flex-col border-[1px] border-black/25 rounded-md"
            >
              <div className="w-16 h-20 bg-[#9568fd] right-0 top-8 absolute blur-2xl shadow-md"></div>
              <div className="w-8 h-20 bg-[#9568fd] left-0 bottom-8 absolute blur-2xl shadow-md"></div>
              <div className="w-full flex mt-3 items-center justify-between">
                <span className="flex items-center gap-5">
                  <img
                    src={profilePic}
                    className="w-11 h-11 border-2 border-white object-cover rounded-full"
                    alt=""
                  />
                  <h1 className="capitalize font-semibold">
                    {post.uploadedBy}
                  </h1>
                </span>
                <span>{post.createdAt}</span>
              </div>
              <div className="my-6 md:my-8 flex flex-col gap-2">
                <h1 className="text-xl font-bold tracking-wide font-sans capitalize">
                  {post.baseText}
                </h1>
                <h1 className="capitalize mt-3">{post.analyzedText}</h1>
              </div>
              <div className="flex bg-white px-2 py-3 rounded-md justify-evenly  items-center gap-5">
                <BiLike className="text-[#9568fd]" size={21} />
                <BiDislike className="text-black/90" size={21} />
                <MdOutlineComment className="text-black/90" size={21} />
                <IoShareSocialOutline className="text-black/90" size={21} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
