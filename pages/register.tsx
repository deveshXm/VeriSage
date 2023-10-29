import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (event: any) => {
    setName(event.target.value);

    console.log("value is:", event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);

    console.log("value is:", event.target.value);
  };
  
  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center items-center">
      <div className="bg-[#161616] w-[30vw] rounded-xl p-10 space-y-10 flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-white">College Name</h1>
          <Input
            type="text"
            name={name}
            onChange={handleNameChange}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h1 className="text-white">College Email</h1>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full"
          />
        </div>
        <Button variant={"outline"} className="w-[10vw]">Submit</Button>
      </div>
    </section>
  );
}


export default Register;

