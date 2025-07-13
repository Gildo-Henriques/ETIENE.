export default function Navbar() {
  return (
    <header className="flex lg:px-32 bg-muted/50 px-5 py-5 items-center justify-between w-full">
                <div className="flex">
            <h2 className="font-semibold lg:text-xl text-lg">
            ETIENE.
            </h2>
        </div>
      <nav className="lg:flex hidden space-x-1 text-lg items-center">

        <a href="">LinkDin /</a>
        <a href="">Instagram /</a>
        <a href=""> Facebook</a>
        
      </nav>
    </header>
  );
}
