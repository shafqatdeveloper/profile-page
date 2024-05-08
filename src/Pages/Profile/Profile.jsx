import React, { useState } from "react";
import profilePic from "../../Assets/profilePic.jpg";
import "./Profile.css";
import { IoIosCamera } from "react-icons/io";
import { BiLike, BiDislike, BiSolidLike } from "react-icons/bi";
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
  const [openProfilePic, setOpenProfilePic] = useState(false);
  const [editProfileForm, setEditProfileForm] = useState(false);

  function openPicModal() {
    setOpenProfilePic(true);
  }

  function closePicModal() {
    setOpenProfilePic(false);
  }

  function openEditProfileModal() {
    setEditProfileForm(true);
  }

  function closeEditProfileModal() {
    setEditProfileForm(false);
  }

  return (
    <div className={`w-full h-full p-2 md:p-0 flex flex-col md:flex-row gap-4`}>
      {/* Profile Pic Model */}
      <Modal
        isOpen={openProfilePic}
        onRequestClose={closePicModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-96 h-96">
          <img src={profilePic} alt="" className="w-full h-full" />
        </div>
      </Modal>
      {/* Edit Profile Model */}
      <Modal
        isOpen={editProfileForm}
        onRequestClose={closeEditProfileModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-center text-xl font-bold text-[#173054] pb-5">
          Update Profile
        </h1>
        <div className="w-72 md:w-80">
          <form className="w-full p-2 flex gap-5 flex-col" id="update-profile">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <div className="border-2 mt-1 rounded-md border-[#173054] bg-[#e5e6e3] p-1.5 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="John "
                  className="w-full p-1.5 rounded-md outline-none bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <div className="border-2 mt-1 rounded-md border-[#173054] bg-[#e5e6e3] p-1.5 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  className="w-full p-1.5 rounded-md outline-none bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-5">
                <label htmlFor="password">Password</label>
                <div className="border-2 mt-1 rounded-md border-[#173054] bg-[#e5e6e3] p-1.5 w-full">
                  <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    className="w-full p-1.5 rounded-md outline-none bg-transparent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="profilePic">Profile Pic</label>
                  <input
                    type="file"
                    class="custom-file-input"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#5E9DDD] py-3.5 rounded-md flex items-center justify-center text-white font-medium">
              <button>Update Profile</button>
            </div>
          </form>
        </div>
      </Modal>
      {/*Profile SideBar */}
      <div className="w-auto md:w-[23%] h-full md:sticky top-0 md:ml-8">
        <div className="md:mt-8 w-full shadow-md shadow-[#5E9DDD] bg-[#173054] relative text-white py-5 flex flex-col items-center border-[1px] border-black/25 rounded-md">
          {/* <div className="w-16 h-20 bg-[#5E9DDD] right-0 top-8 absolute blur-2xl shadow-md"></div> */}
          {/* <div className="w-8 h-20 bg-[#5E9DDD] left-0 bottom-8 absolute blur-2xl shadow-md"></div> */}
          <div className="md:w-32 w-20 border-[2px] border-[#B8BDB5] relative rounded-full md:h-32 h-20 mt-10">
            <img
              src={profilePic}
              onClick={openPicModal}
              alt="Profile"
              className="w-full rounded-full cursor-pointer object-center h-full"
            />
            <div className="bg-[#5E9DDD] p-1 sm:p-2 cursor-pointer text-[#E0E2DB] absolute right-0 bottom-[-3px] sm:right-4 rounded-full w-min">
              <IoIosCamera />
            </div>
          </div>
          <div className="py-8">
            <h1 className="uppercase text-2xl text-[#E0E2DB] font-semibold font-sans">
              johan koza
            </h1>
            <h1 className="text-sm text-[#D2D4C8] text-center">
              johankoza@gmail.com
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={openEditProfileModal}
              className="bg-[#5E9DDD] w-32 py-1.5 text-white font-semibold"
            >
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
              className="w-full bg-[#173054] relative text-[#E0E2DB] p-3  flex flex-col border-[1px] border-black/25 rounded-md"
            >
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
                <span className="text-[#E0E2DB]">{post.createdAt}</span>
              </div>
              <div className="my-6 md:my-8 flex flex-col gap-2">
                <h1 className="text-xl font-bold tracking-wide font-sans capitalize">
                  {post.baseText}
                </h1>
                <h1 className="capitalize mt-3">{post.analyzedText}</h1>
              </div>
              <div className="flex bg-[#E0E2DB] px-2 py-3 rounded-md justify-evenly  items-center gap-5">
                <BiSolidLike className="text-[#5E9DDD]" size={21} />
                <BiDislike className="text-[#173054]" size={21} />
                <MdOutlineComment className="text-[#173054]" size={21} />
                <IoShareSocialOutline className="text-[#173054]" size={21} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
