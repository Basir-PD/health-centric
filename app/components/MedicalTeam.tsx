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

const credentials = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Board Certified',
    description: 'All physicians are board-certified in their specialties',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Licensed Nationwide',
    description: 'Licensed to practice in all 50 states',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Research-Driven',
    description: 'Protocols based on latest clinical research',
  },
];

export default function MedicalTeam() {
  return (
    <section className="bg-[#faf8f5] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
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
            className="mt-4 text-gray-500 text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our medical team reviews every result and provides personalized guidance.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
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
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {doctor.name}
                  </div>
                  <div className="text-sm text-white/80">{doctor.credentials}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-brand)' }}
                >
                  {doctor.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">{doctor.specialty}</div>
                <p
                  className="mt-3 text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {doctor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Row */}
        <div className="grid gap-6 sm:grid-cols-3">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100"
            >
              <div
                className="flex-shrink-0 p-2 rounded-lg"
                style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
              >
                {credential.icon}
              </div>
              <div>
                <div
                  className="font-semibold text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {credential.title}
                </div>
                <p className="mt-1 text-sm text-gray-500">{credential.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
