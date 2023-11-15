import React from "react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropdownTable({ status }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-end">
        <p>{status}</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7.5C14 7.10444 14.1173 6.71776 14.3371 6.38886C14.5568 6.05996 14.8692 5.80362 15.2346 5.65224C15.6001 5.50087 16.0022 5.46126 16.3902 5.53843C16.7781 5.6156 17.1345 5.80608 17.4142 6.08579C17.6939 6.36549 17.8844 6.72186 17.9616 7.10982C18.0387 7.49778 17.9991 7.89992 17.8478 8.26537C17.6964 8.63082 17.44 8.94318 17.1111 9.16294C16.7822 9.3827 16.3956 9.5 16 9.5C15.4696 9.5 14.9609 9.28929 14.5858 8.91421C14.2107 8.53914 14 8.03043 14 7.5ZM16 14C15.6044 14 15.2178 14.1173 14.8889 14.3371C14.56 14.5568 14.3036 14.8692 14.1522 15.2346C14.0009 15.6001 13.9613 16.0022 14.0384 16.3902C14.1156 16.7781 14.3061 17.1345 14.5858 17.4142C14.8655 17.6939 15.2219 17.8844 15.6098 17.9616C15.9978 18.0387 16.3999 17.9991 16.7654 17.8478C17.1308 17.6964 17.4432 17.44 17.6629 17.1111C17.8827 16.7822 18 16.3956 18 16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14ZM16 22.5C15.6044 22.5 15.2178 22.6173 14.8889 22.8371C14.56 23.0568 14.3036 23.3692 14.1522 23.7346C14.0009 24.1001 13.9613 24.5022 14.0384 24.8902C14.1156 25.2781 14.3061 25.6345 14.5858 25.9142C14.8655 26.1939 15.2219 26.3844 15.6098 26.4616C15.9978 26.5387 16.3999 26.4991 16.7654 26.3478C17.1308 26.1964 17.4432 25.94 17.6629 25.6111C17.8827 25.2822 18 24.8956 18 24.5C18 23.9696 17.7893 23.4609 17.4142 23.0858C17.0391 22.7107 16.5304 22.5 16 22.5Z"
            fill="black"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to="/tantangan/edit-tantangan">
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Hapus</DropdownMenuItem>
        <Link to="/tantangan/detail-tantangan">
          <DropdownMenuItem>Lihat</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownTable;
