import Link from "next/link";

function Navbar() {
    return (
        <div className="flex gap-4">    
            <Link href="/home"> Home </Link>
            <Link href="/contacto"> Contacto </Link>
            <Link href="/habitaciones"> Habitaciones </Link>
            <Link href="/reserva"> Reserva </Link>
            <Link href="/restaurante"> Restaurante </Link>
            <Link href="/login"> Login </Link>
        </div>
    );
}

export default Navbar;
