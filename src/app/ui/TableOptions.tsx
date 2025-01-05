"use client";
import Image from "next/image";
import editIcon from "../../../public/edit.jpg";
import downloadIcon from "../../../public/download.jpg";
import deleteIcon from "../../../public/delete.png";
import { useState } from "react";
import { Modal } from "./DetailPage";
import { type DetailData } from "@/lib/types";
import { calculateAge } from "@/lib/helpers";

export function TableOptions({ id }: { id: string }) {
  const [details, setDetails] = useState<DetailData>();

  const onEditClick = () => {
    console.log("edit row option is clicked");
    fetch(`../api/detail/?id=${id}`).then((response) => {
      response.json().then((jsonResponse) => {
        setDetails({
          ...jsonResponse.data,
          Age: calculateAge(jsonResponse.data.DOB),
        });
      });
    });
  };

  const onDownloadClick = () => {
    console.log("download row option is clicked");
  };
  const onDeleteClick = () => {
    console.log("delete row option is clicked");
  };
  return (
    <div className="inline-grid grid-cols-3 gap-2">
      <Modal
        trigger={
          <Image
            src={editIcon}
            height={25}
            width={25}
            alt={`edit-table-row`}
            onClick={onEditClick}
          />
        }
        data={details}
      />
      <Image
        src={downloadIcon}
        height={25}
        width={25}
        alt={`download-table-row`}
        onClick={onDownloadClick}
      />
      <Image
        src={deleteIcon}
        height={25}
        width={25}
        alt={`delete-table-row`}
        onClick={onDeleteClick}
      />
    </div>
  );
}
