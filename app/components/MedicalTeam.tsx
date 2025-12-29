'use client';

const doctors = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Medical Officer',
    specialty: 'Internal Medicine',
    credentials: 'MD, FACP',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    bio: '15+ years leading preventive care initiatives at Stanford Health.',
  },
  {
    name: 'Dr. Michael Torres',
    title: 'Medical Director',
    specialty: 'Endocrinology',
    credentials: 'MD, PhD',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    bio: 'Former Mayo Clinic researcher specializing in metabolic disorders.',
  },
  {
    name: 'Dr. Emily Watson',
    title: 'Head of Lab Sciences',
    specialty: 'Clinical Pathology',
    credentials: 'MD, FCAP',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    bio: 'Pioneered new biomarker testing protocols at Johns Hopkins.',
  },
  {
    name: 'Dr. James Park',
    title: 'Clinical Advisor',
    specialty: 'Cardiology',
    credentials: 'MD, FACC',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face',
    bio: 'Published researcher in cardiovascular risk assessment.',
  },
];

export default function MedicalTeam() {
  return (
    <section className="bg-[#faf8f5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight">
            <span
              className="font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Led by
            </span>
            <span
              className="italic block sm:inline sm:ml-2"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              trusted physicians
            </span>
          </h2>
          <p
            className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our medical team reviews every result and provides personalized guidance.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <div
                    className="text-sm sm:text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {doctor.name}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">{doctor.credentials}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4">
                <div
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: 'var(--color-brand)' }}
                >
                  {doctor.title}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{doctor.specialty}</div>
                <p
                  className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {doctor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
