export default function NotFoundSection() {
  return (
    <section className="flex items-center h-screen p-16 bg-orange-600">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-2xl md:text-5xl font-semibold text-white">
            404 Error
          </p>
          <p className="text-sm md:text-4xl text-white">
            Maaf, Halaman tidak ditemukan.
          </p>
        </div>
      </div>
    </section>
  );
}
