import React, { useState } from "react";
import profilePic from "../../Assets/profilePic.jpg";
import { BiDislike, BiSolidLike } from "react-icons/bi";
import { MdDelete, MdOutlineComment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Modal from "react-modal";

const Analyze = ({ analyzes }) => {
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

  const [deletePostModal, setDeletePostModal] = useState(false);
  const [commentBoxOpened, setCommentBoxOpened] = useState(false);
  const [commentText, setCommentText] = useState("");

  function openDeletePostModal() {
    setDeletePostModal(true);
  }

  function closeDeletePostModal() {
    setDeletePostModal(false);
  }

  const deletePostHandler = () => {
    setDeletePostModal(false);
  };

  function openCommentBoxModal() {
    setCommentBoxOpened(true);
  }
  const closeCommentBoxModal = () => {
    setCommentBoxOpened(false);
  };

  const likeAnalyzeHandler = () => {
    alert("Liked");
  };
  const dislikeAnalyzeHandler = () => {
    alert("Disliked");
  };
  const shareAnalyzeHandler = () => {
    alert("Shared");
  };
  const commentAnalyzeHandler = (e) => {
    e.preventDefault();
    closeCommentBoxModal();
    setCommentText("");
    alert("Comment Posted");
  };

  return (
    <div className="w-full md:mt-8 flex flex-col gap-3 items-center">
      {analyzes && analyzes.length > 0 ? (
        analyzes.map((post, index) => {
          return (
            <div
              key={index}
              className="w-full bg-[#173054] relative text-[#E0E2DB] p-3  flex flex-col border-[1px] border-black/25 rounded-md"
            >
              {/* Upper Section of Each Analyze Post. Profile Pic, Date Uploaded and Delete Button */}
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
                <div className="flex items-center gap-4">
                  <span className="text-[#E0E2DB]">{post.createdAt}</span>
                  {/* Delete Post Button */}
                  <span
                    className="bg-[#a6d2ff] p-2 rounded-full cursor-pointer"
                    onClick={openDeletePostModal}
                  >
                    <MdDelete className="text-red-600" size={23} />
                  </span>
                </div>
              </div>
              {/* Base Text and Analyzed Text Section */}
              <div className="my-6 md:my-8 flex flex-col gap-2">
                <h1 className="text-xl font-bold tracking-wide font-sans capitalize">
                  {post.baseText}
                </h1>
                <h1 className="capitalize mt-3">{post.analyzedText}</h1>
              </div>
              {/* Action Button such as Like, Dislike, Comment and Share */}
              <div className="flex bg-[#E0E2DB] px-2 py-3 rounded-md justify-evenly  items-center gap-5">
                <BiSolidLike
                  onClick={likeAnalyzeHandler}
                  className="text-[#5E9DDD] cursor-pointer"
                  size={21}
                />
                <BiDislike
                  onClick={dislikeAnalyzeHandler}
                  className="text-[#173054] cursor-pointer"
                  size={21}
                />
                <MdOutlineComment
                  onClick={openCommentBoxModal}
                  className="text-[#173054] cursor-pointer"
                  size={21}
                />
                <IoShareSocialOutline
                  onClick={shareAnalyzeHandler}
                  className="text-[#173054] cursor-pointer"
                  size={21}
                />
              </div>
            </div>
          );
        })
      ) : (
        // If There are no nalayzes
        <div className="w-full md:w-[55%] h-[30vh] md:h-[70vh] md:mt-8 flex flex-col gap-3 justify-center items-center">
          <h1 className="text-3xl capitalize font-bold tracking-wide">
            No Analyzes yet ☹️!
          </h1>
        </div>
      )}

      {/* Modals */}
      {/* Delete Post Modal */}
      <Modal
        isOpen={deletePostModal}
        onRequestClose={closeDeletePostModal}
        style={customStyles}
        contentLabel="Delete Post"
      >
        <h1 className="text-center capitalize">
          are you sure to delete this analyze?
        </h1>
        <div className="mt-6 mb-1 flex items-center gap-4">
          <button
            onClick={deletePostHandler}
            className="bg-red-500 w-32 px-2 py-1.5 text-white font-semibold"
          >
            Yes
          </button>
          <button
            onClick={closeDeletePostModal}
            className="bg-[#5E9DDD] w-32 py-1.5 text-white font-semibold"
          >
            No
          </button>
        </div>
      </Modal>
      {/* Comment Box Modal */}
      <Modal
        isOpen={commentBoxOpened}
        onRequestClose={closeCommentBoxModal}
        style={customStyles}
        contentLabel="Delete Post"
      >
        <div className="w-72">
          <form className="w-full p-2 flex gap-5 flex-col" id="update-profile">
            {/* Comment Field */}
            <div className="w-full">
              <label htmlFor="comment">Comment</label>
              <div className="border-2 mt-1 rounded-md border-[#173054] bg-[#e5e6e3] p-1.5 w-full">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  name="comment"
                  placeholder="Enter Your Comment"
                  className="w-full p-1.5 rounded-md outline-none bg-transparent focus:outline-none"
                />
              </div>
            </div>
            {/* Update Profile Button */}
            <div
              onClick={(e) => commentAnalyzeHandler(e)}
              className="w-full cursor-pointer bg-[#5E9DDD] py-2.5 rounded-md flex items-center justify-center text-white font-medium"
            >
              <button>Post</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Analyze;
