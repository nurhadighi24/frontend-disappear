import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";

export default function Ulasan() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/ulasan/lihat-ulasan");
  }

  const data = [
    {
      No: 1,
      NamaProduk: "Totebag",
      Penilaian: "4.7",
      TotalReview: 200,
    },
    {
      No: 2,
      NamaProduk: "Alat makan ramah lingkungan",
      Penilaian: "4.7",
      TotalReview: 150,
    },
    {
      No: 3,
      NamaProduk: "botol minuman stainless steel",
      Penilaian: "5.0",
      TotalReview: 45,
    },
    {
      No: 4,
      NamaProduk: "Alat makan ramah lingkungan",
      Penilaian: "4.7",
      TotalReview: 78,
    },
    {
      No: 5,
      NamaProduk: "Totebag",
      Penilaian: "5.0 ",
      TotalReview: 50,
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Nama Produk", accessor: "NamaProduk" },
    { Header: "Penilaian", accessor: "Penilaian" },
    { Header: "Total Review", accessor: "TotalReview" },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Ulasan" />
        </div>

        <div className="mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex justify-start items-center mb-7 gap-5">
            <div className="flex items-center">
              <Input type="text" placeholder="Cari Tantangan" className="p-3" />
              <FiSearch className="absolute ml-36" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center rounded-md bg-white py-3 px-3 border gap-20">
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
                <DropdownMenuItem>Terbaik</DropdownMenuItem>
                <DropdownMenuItem>Terburuk</DropdownMenuItem>
                <DropdownMenuItem>Sedang</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Tabel columns={columns} data={data} />
        </div>
      </Layout>
    </div>
  );
}
