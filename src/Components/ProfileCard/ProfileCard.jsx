import React, { useState } from "react";
import profilePic from "../../Assets/profilePic.jpg";
import { IoIosCamera } from "react-icons/io";
import Modal from "react-modal";

const ProfileCard = ({ analyzes }) => {
  const [openProfilePic, setOpenProfilePic] = useState(false);
  const [editProfileForm, setEditProfileForm] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  function openPicModal() {
    setOpenProfilePic(true);
  }

  function closePicModal() {
    setOpenProfilePic(false);
  }
  function openlogoutModal() {
    setLogoutModal(true);
  }

  function closelogoutModal() {
    setLogoutModal(false);
  }

  function openEditProfileModal() {
    setEditProfileForm(true);
  }

  function closeEditProfileModal() {
    setEditProfileForm(false);
  }
  const handleLogout = () => {
    closelogoutModal();
  };

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

  return (
    <div className={`w-full h-full md:ml-8`}>
      <div className="md:mt-8 w-full shadow-md shadow-[#5E9DDD] bg-[#173054] relative text-white py-5 flex flex-col items-center border-[1px] border-black/25 rounded-md">
        {/* Person's Profile Photo */}
        <div
          className={` ${
            analyzes.length < 1
              ? "md:w-40 w-28 border-[2px] border-[#B8BDB5] relative rounded-full md:h-40 h-28 mt-10"
              : "md:w-32 w-20 border-[2px] border-[#B8BDB5] relative rounded-full md:h-32 h-20 mt-10"
          } ""`}
        >
          <img
            src={profilePic}
            onClick={openPicModal}
            alt="Profile"
            className="w-full rounded-full cursor-pointer object-center h-full"
          />
          <div
            onClick={openEditProfileModal}
            className={`${
              analyzes.length < 1
                ? "bg-[#5E9DDD] p-2 sm:p-3 cursor-pointer text-[#E0E2DB] absolute right-0 bottom-[-3px] sm:right-4 rounded-full w-min"
                : "bg-[#5E9DDD] p-1 sm:p-2 cursor-pointer text-[#E0E2DB] absolute right-0 bottom-[-3px] sm:right-4 rounded-full w-min"
            }`}
          >
            <IoIosCamera />
          </div>
        </div>
        {/* Person's Name and Email */}
        <div className="py-8">
          <h1
            className={`uppercase ${
              analyzes.length < 1 ? "text-3xl" : "text-2xl"
            } text-[#E0E2DB] font-semibold font-sans`}
          >
            johan koza
          </h1>
          <h1
            className={`${
              analyzes.length < 1 ? "" : "text-sm"
            } text-[#D2D4C8] text-center`}
          >
            johankoza@gmail.com
          </h1>
        </div>
        {/* Edit Profile and Logout Button */}
        <div
          className={`flex flex-col items-center gap-4 ${
            analyzes.length < 1 && "mb-5"
          } `}
        >
          {/* Edit Profile Button */}
          <button
            onClick={openEditProfileModal}
            className={`bg-[#5E9DDD] ${
              analyzes.length < 1 ? "w-48 py-2" : "w-32 py-1.5"
            } text-white font-semibold`}
          >
            Edit Profile
          </button>
          {/* Logout Button */}
          <button
            onClick={openlogoutModal}
            className={`bg-red-600 ${
              analyzes.length < 1 ? "w-48 py-2" : "w-32 py-1.5"
            } text-white font-semibold`}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Modals */}
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
        {/* Update Profile Form */}
        <div className="w-72 md:w-80">
          <form className="w-full p-2 flex gap-5 flex-col" id="update-profile">
            {/* Name Field */}
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
            {/* Email Field */}
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
            {/* Password and Profile Photo */}
            <div className="w-full">
              <div className="flex flex-col gap-5">
                {/* Password Field */}
                <div>
                  <label htmlFor="password">Password</label>
                  <div className="border-2 mt-1 rounded-md border-[#173054] bg-[#e5e6e3] p-1.5 w-full">
                    <input
                      type="password"
                      name="password"
                      placeholder="*********"
                      className="w-full p-1.5 rounded-md outline-none bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
                {/* Profile Photo Input */}
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
            {/* Update Profile Button */}
            <div className="w-full bg-[#5E9DDD] py-3.5 rounded-md flex items-center justify-center text-white font-medium">
              <button>Update Profile</button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Logout Confirmation Model */}
      <Modal
        isOpen={logoutModal}
        onRequestClose={closelogoutModal}
        style={customStyles}
        contentLabel="Logout Confirmation Modal"
      >
        <h1 className="text-center capitalize">
          are you sure you want to logout?
        </h1>
        <div className="mt-6 mb-1 flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 w-32 px-2 py-1.5 text-white font-semibold"
          >
            Yes
          </button>
          <button
            onClick={closelogoutModal}
            className="bg-[#5E9DDD] w-32 py-1.5 text-white font-semibold"
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileCard;
