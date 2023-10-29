import React from "react";
import Sidebar from "@/components/sidebar";
import CardWithForm from "@/components/CardWithForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function upload() {
  return (
    <div className="">
      {/* <h1>Upload the files here</h1> */}
      <div className="flex flex-row p-10">
        {/* <div className=" w-96 h-screen flex">
          <Sidebar />
        </div> */}
        <div className="flex  w-full justify-center">
          <CardWithForm />
        </div>
      </div>
    </div>
  );
}

export default upload;
