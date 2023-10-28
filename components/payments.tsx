"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  title: string;
  description: string;
  department: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Request ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
