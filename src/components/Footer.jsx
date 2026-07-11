export default function Footer() {
  return (
    <footer className="bg-[#272640] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/assets/logo.webp"
                className="h-12"
                alt=""
              />

              <h2 className="text-xl font-bold">
                EthianTech LLM
              </h2>

            </div>

            <p className="mt-6 text-gray-300 leading-7">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text.
            </p>

          </div>

          <div>

            <h3 className="mb-5 font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>

            </ul>

          </div>

          <div className="md:col-span-2 lg:col-span-1">

            <h3 className="font-semibold">
              Subscribe to our newsletter
            </h3>

            <p className="mt-4 text-gray-300">
              The latest news, articles, and resources,
              sent to your inbox weekly.
            </p>

            <div className="mt-6 flex">

              <input
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-[#32304d] px-2 py-3 outline-none rounded-r-none"
              />

              <button className="rounded-lg bg-[#D62A91] px-2 py-3 rounded-l-none">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        Copyright © 2024 © Edemy. All Rights Reserved.
      </div>

    </footer>
  );
}