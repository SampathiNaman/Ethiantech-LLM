import data from "../data/testimonialsData.json";

const { companies, testimonials } = data;

export default function Testimonials() {
  return (
    <section className="py-20">

      <div className="text-center">

        <p className="text-gray-500 font-medium">
          Trusted by learners from
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-14">

          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-8 object-contain "
            //   grayscale hover:grayscale-0 transition
            />
          ))}
        </div>

        <h2 className="mt-24 text-4xl font-bold text-gray-800">
          Testimonials
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-gray-500">
          Hear from our learners as they share their journeys of
          transformation, success, and how our platform has made a
          difference in their lives.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-6 md:grid-cols-3">

        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 border-b p-5">

              <img
                src={item.image}
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />

              <div>
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>

            <div className="p-5">

              <div className="mb-3 flex">
                ⭐⭐⭐
                {/* {Array.from({ length: 5 }).map((_, i) => (⭐
                //   <StarIcon
                //     key={i}
                //     className="h-5 w-5 text-orange-500"
                //   />
                ))} */}

              </div>

              <p className="text-sm leading-7 text-gray-500">
                I've been using imagify for nearly two years,
                primarily for Instagram, and it has been
                incredibly user-friendly, making my work much
                easier.
              </p>

              <button className="mt-6 text-sm font-medium text-pink-600 hover:underline">
                Read more
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}