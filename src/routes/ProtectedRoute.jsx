import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "@/utils/context/TokenContext";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { tokenLocal, tokenSession, user } = useToken();

  const protectedByToken = [
    "/category",
    "/dashboard",
    "/pelanggan",
    "/tantangan",
    "/pelanggan/pelanggandetail",
    "/tantangan",
    "/tantangan/buat-tantangan",
    "/tantangan/:id/edit-tantangan",
    "/tantangan/:id",
    "/peserta-tantangan",
    "/peserta-tantangan/:id/edit-peserta-tantangan",
    "/produk",
    "/produk/buat-Produk",
    "/produk/edit-produk",
    "/produk/:id",
    "/kupon",
    "/kupon/buat-kupon",
    "/kupon/edit-kupon",
    "/create-news",
    "/edit-news",
    "/detail-news",
    "/artikel",
    "/pesanan",
    "/pesanan/detail-pesanan",
    "/pembayaran",
    "/pembayaran/:id",
    "/ulasan",
    "/ulasan/:id",
    "/carousel",
  ];

  const getUserRole = (token) => {
    if (!token) return null;
    try {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      const user = JSON.parse(decodedPayload);

      return user?.role;
    } catch (error) {
      return null;
    }
  };

  if (!tokenLocal && !tokenSession && protectedByToken.includes(pathname)) {
    return <Navigate to="/login" />;
  }

  const role = getUserRole(tokenLocal || tokenSession);

  if (role === "customer") {
    console.log("Tidak memiliki akses!");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
