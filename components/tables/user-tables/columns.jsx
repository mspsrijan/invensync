"use client";
import { CellAction } from "./cell-action";

export const columns = [
  {
    accessorKey: "firstName",
    header: "FIRST NAME",
  },
  {
    accessorKey: "lastName",
    header: "LAST NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "role",
    header: "ROLE",
  },
  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
