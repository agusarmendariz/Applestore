function Footer() {
  return (
    <footer className="w-full bg-gray-400 text-gray-300 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 text-center text-sm select-none">
        &copy; {new Date().getFullYear()} AppleStore. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;