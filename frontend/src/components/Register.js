import React, { useState } from "react";
import { toast } from "react-toastify";
const Register = () => {
  const bgStyle = {
    background:
      "#0E2662 radial-gradient(circle farthest-side at bottom center, #0E2662 0%, #000000 100%)",
  };

  const success = (msg) => {
    toast.success(msg);
  };

  const error = (msg) => {
    toast.error(msg);
  };

  // Form state
  const [teamname, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");

  const postDetails = () => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamname,
        email,
        mobile,
        college,
        member1,
        member2,
        member3,
        member4,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          error(data.error);
        } else {
          success(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={bgStyle}
      className="w-full h-screen text-white flex justify-center items-center"
    >
      <div className="w-[50%] py-[4vw] bg-[#4f4f4f4e] items-center flex flex-col px-[4vw] rounded-xl gap-[1.5vw]">
        <h1 className="text-[2.2vw] font-semibold">Register For Event</h1>
        <div className="w-full">
          <input
            type="text"
            id="teamname"
            value={teamname}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Team Name"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            id="college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            placeholder="College Name"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            id="member1"
            value={member1}
            onChange={(e) => setMember1(e.target.value)}
            placeholder="Team Member 1"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            id="member2"
            value={member2}
            onChange={(e) => setMember2(e.target.value)}
            placeholder="Team Member 2"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            id="member3"
            value={member3}
            onChange={(e) => setMember3(e.target.value)}
            placeholder="Team Member 3"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            id="member4"
            value={member4}
            onChange={(e) => setMember4(e.target.value)}
            placeholder="Team Member 4"
            className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
          />
        </div>

        <div className="w-full justify-center items-center flex">
          <button
            onClick={postDetails}
            className="border-[0.1vw] px-[1.5vw] py-[0.4vw] rounded-lg hover:bg-white font-bold hover:text-zinc-700"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;