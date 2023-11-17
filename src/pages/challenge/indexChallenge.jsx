import { useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import { FiSearch } from "react-icons/fi";
import Button from "@/components/button";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownTable from "@/components/dropdownTable/dropdownTable";
import Tabel from "@/components/table/table";
import { Input } from "@/components/ui/input";

function IndexChallenge() {
  const navigate = useNavigate();

  const data = [
    {
      No: 1,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 150,
      Status: "Kadaluwarsa",
    },
    {
      No: 2,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Belum Kadaluwarsa",
    },
    {
      No: 3,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Belum Kadaluwarsa",
    },
    {
      No: 4,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 100,
      Status: "Kadaluwarsa",
    },
    {
      No: 5,
      NamaTantangan: "Tantangan menanam pohon",
      TanggalMulai: "24-10-2023",
      TanggalBerakhir: "31-10-2023",
      EXP: 150,
      Status: "Belum Kadaluwarsa",
    },
  ];

  const columns = [
    { Header: "No", accessor: "No" },
    { Header: "Nama Tantangan", accessor: "NamaTantangan" },
    { Header: "Tanggal Mulai", accessor: "TanggalMulai" },
    { Header: "Tanggal Berakhir", accessor: "TanggalBerakhir" },
    { Header: "EXP", accessor: "EXP" },
    {
      Header: "Status",
      accessor: "Status",
      Cell: ({ row }) => (
        <div className="flex items-center">
          <p>{row.original.Status}</p>
          <div className="ml-auto">
            <DropdownTable />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="my-6">
          <Breadcrumbs pages="Tantangan" />
        </div>

        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <div className="flex items-center pb-7 gap-6">
            <Button
              className="flex items-center space-x-2 border bg-[#25745A] text-white p-3 rounded-lg"
              label="Buat Tantangan"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                    fill="white"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="white"
                  />
                </svg>
              }
              onClick={() => navigate("/tantangan/buat-tantangan")}
            />

            <div className="justify-items-start">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Cari Tantangan"
                  className="p-3"
                />
                <FiSearch className="absolute ml-36" />
              </div>
            </div>

            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white p-3 border gap-20">
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
                  <DropdownMenuItem>Kadaluwarsa</DropdownMenuItem>
                  <DropdownMenuItem>Belum Kadaluwarsa</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Tabel columns={columns} data={data} />
        </div>
      </Layout>
    </div>
  );
}

export default IndexChallenge;
