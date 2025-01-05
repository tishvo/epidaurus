"use client";

import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableOptions } from "./TableOptions";
import { useEffect, useState } from "react";
import { formatPercent } from "../../lib/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProgressBarStyles } from "../../lib/helpers";
import { type TableData } from "@/lib/types";

export default function TableWithSearch() {
  const [tableData, setTableData] = useState<TableData[]>([]);
  useEffect(() => {
    console.log("fetching table data...");
    fetch("../api/summary").then((response) => {
      response.json().then((jsonResponse) => {
        setTableData(jsonResponse.data);
      });
    });
  }, []);

  const onFilterClick = () => {
    console.log("Filter button is clicked");
  };

  return (
    <>
      <div className="flex justify-between mx-12 mb-5">
        <div className="w-75">
          <Input className="bg-white" placeholder={`Search`} />
        </div>
        <div>
          <Button
            className="bg-white text-cyan-900"
            onClick={onFilterClick}
            variant={"outline"}
          >
            Filter
          </Button>
        </div>
      </div>
      <div className="w-100 mx-12 mb-12">
        <Table className="overflow-scroll border-2">
          <TableHeader className="text-lg bg-indigo-50">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-[175px]">Name</TableHead>
              <TableHead className="w-[125px]">Status</TableHead>
              <TableHead className="w-[125px]">Completeness</TableHead>
              <TableHead className="w-[125px]">Confidence</TableHead>
              <TableHead className="w-[125px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {tableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.ID}</TableCell>
                <TableCell>{data.Name}</TableCell>
                <TableCell>{data.Status}</TableCell>
                <TableCell>
                  <div className={getProgressBarStyles(data.Completeness)}>
                    {formatPercent(data.Completeness) ?? "N/A"}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx({
                    "text-red-700": data.Confidence && data.Confidence < 50,
                    "text-orange-600":
                      data.Confidence &&
                      data.Confidence >= 50 &&
                      data.Confidence < 90,
                    "text-green-700": data.Confidence && data.Confidence >= 90,
                  })}
                >
                  {data.Confidence ?? "N/A"}
                </TableCell>
                <TableCell>
                  <TableOptions id={data.ID} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
