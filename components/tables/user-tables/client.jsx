"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

export const UserClient = ({ users }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Users (${users.length})`} description="Manage users" />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/new-user`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              {columns.map((column) => (
                <TableCell key={column.accessorKey || column.id}>
                  {column.accessorKey
                    ? user[column.accessorKey]
                    : column.cell({ row: { original: user } })}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
