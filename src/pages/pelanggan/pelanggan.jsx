import Layout from "../../components/layout";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import "../../styles/pelanggan/pelanggan.css";
import { useState, useEffect, useRef } from "react";
import Tabel from "../../components/table/table";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Delete from "@/components/delete/delete";
import { BiEdit, BiTrash } from "react-icons/bi";
function App() {
  const handleDelete = () => {
    Delete({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
    });
  };
  const data = [
    {
      Foto: <img src="rectangle-58.png" className="w-16 h-20 rounded-md" />,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: <img src="rectangle-58.png" className="w-16 h-20 rounded-md" />,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: <img src="rectangle-58.png" className="w-16 h-20 rounded-md" />,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: <img src="rectangle-58.png" className="w-16 h-20 rounded-md" />,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
  ];

  const columns = [
    { Header: "Foto", accessor: "Foto" },
    { Header: "Email", accessor: "Email" },
    { Header: "Nama", accessor: "Nama" },
    { Header: "Telepon", accessor: "Telepon" },
    { Header: "Total Gram", accessor: "TotalGram" },
    { Header: "EXP", accessor: "EXP" },
    {
      Header: "Level",
      accessor: "Level",
      Cell: ({ row }) => (
        <div className="level-cell">
          {row.original.Level}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="three-dots">
                <PiDotsThreeVerticalBold />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link to="/pelanggan/pelanggandetail">
                <DropdownMenuItem className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white">
                  <BiEdit />
                  <p>Edit</p>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="hover:bg-secondary-green cursor-pointer items-center gap-3 hover:text-white"
                onClick={handleDelete}
              >
                <BiTrash />
                <p>Hapus</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="">
        <Breadcrumbs pages="Pelanggan" />

        <div className="w-full mt-5  px-5 py-5 shadow-md bg-white rounded-md">
          <div className="flex justify-between pb-7">
            <h2 className="font-bold">Semua Pelanggan</h2>
            <div className="flex space-x-3">
              <div className="my-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border gap-20">
                    <p>Filter</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <path
                        d="M5 4.5L0.669872 0.75L9.33013 0.75L5 4.5Z"
                        fill="#373737"
                      />
                    </svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem>Gold</DropdownMenuItem>
                    <DropdownMenuItem>Silver</DropdownMenuItem>
                    <DropdownMenuItem>Bronze</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="overflow-x-auto">
              <Tabel columns={columns} data={data} />
              <div className="pagination flex justify-end items-center mt-4">
                <button className="flex border text-black hover:bg-slate-400 hover:text-white p-2 items-center space-x-40 rounded-lg">
                  &lt; Sebelumnya
                </button>
                <span className="mx-2">1</span>{" "}
                <button className="flex border text-black hover:bg-slate-400 hover:text-white p-2 items-center space-x-40 rounded-lg">
                  Selanjutnya &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
