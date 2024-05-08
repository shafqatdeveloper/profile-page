import React from "react";
import "./Profile.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Analyze from "../../Components/Analyzes/Analyze";

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

  return (
    <div
      className={`w-full h-full p-2 md:p-0 flex flex-col md:flex-row gap-3 md:gap-20`}
    >
      {/*Profile SideBar */}
      <div
        className={`${
          analyzes.length < 1
            ? "w-auto md:w-[28%]"
            : "w-auto md:w-[23%] md:sticky top-0 h-full"
        }`}
      >
        <ProfileCard analyzes={analyzes} />
      </div>
      {/* Analyzes */}
      <div
        className={`${
          analyzes.length < 1 ? "w-auto md:w-[50%]" : "w-full md:w-[55%]"
        }`}
      >
        <Analyze analyzes={analyzes} />
      </div>
    </div>
  );
};

export default Profile;
