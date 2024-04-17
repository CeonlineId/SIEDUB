export default function NotFoundSection() {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-200q">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <p className="text-2xl md:text-3xl font-semibold">404 Error</p>
          <p className="text-2xl md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
        </div>
      </div>
    </section>
  );
}
