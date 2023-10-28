import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable";
import { Payment, columns } from "@/components/payments";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "123123",
      title: "Very Good",
      description: "Good",
      department: "A",
      status: "pending",
    },
    {
      id: "123123",
      title: "Very Good",
      description: "Good",
      department: "A",
      status: "pending",
    },
    {
      id: "123123",
      title: "Very Good",
      description: "Good",
      department: "A",
      status: "pending",
    },
    {
      id: "123123",
      title: "Very Good",
      description: "Good",
      department: "A",
      status: "pending",
    },
    {
      id: "123123",
      title: "Bad",
      description: "Good",
      department: "A",
      status: "pending",
    },
    {
      id: "123123",
      title: "Very Good",
      description: "Good",
      department: "A",
      status: "pending",
    },
    // ...
  ];
}

function Dashboard() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    // Simulating an asynchronous operation with a promise
    const fetchData = async () => {
      try {
        const response: Payment[] = await getData();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="relative h-screen bg-black flex flex-col items-center">
      <div className="flex justify-between px-10 py-7 items-center w-full">
        <h1 className="text-white">Decentrized</h1>
        <Button variant="destructive">Disconnect</Button>
      </div>
      <div className="bg-[#161616] w-[60vw] rounded-xl mt-10 p-10">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}

export default Dashboard;

