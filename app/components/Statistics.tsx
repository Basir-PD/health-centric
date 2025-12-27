const stats = [
  {
    value: '71%',
    label: 'of users discovered a previously unknown health issue',
    description:
      'Early detection leads to better outcomes and more treatment options.',
  },
  {
    value: '18%',
    label: 'average improvement in key biomarkers after 6 months',
    description:
      'Actionable insights drive real, measurable health improvements.',
  },
  {
    value: '51%',
    label: 'of users report increased energy and mental clarity',
    description:
      'Optimizing your biology impacts how you feel every day.',
  },
  {
    value: '63%',
    label: 'reduced their chronic disease risk factors',
    description:
      'Prevention is the most powerful medicine we have.',
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real results from{' '}
            <span className="text-teal-600">real people</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our members are taking control of their health and seeing measurable
            improvements. Here is what the data shows.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center"
            >
              {/* Large Number */}
              <div className="text-5xl font-bold text-teal-600 lg:text-6xl">
                {stat.value}
              </div>

              {/* Label */}
              <p className="mt-4 text-base font-medium text-gray-900">
                {stat.label}
              </p>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500">{stat.description}</p>

              {/* Decorative Element */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Join over{' '}
            <span className="font-semibold text-gray-900">50,000 members</span>{' '}
            who have transformed their health with VitalPath.
          </p>
        </div>
      </div>
    </section>
  );
}
