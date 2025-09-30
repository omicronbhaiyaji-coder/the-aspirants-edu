import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">A</div>
            <div>
              <h1 className="text-lg font-semibold">The Aspirants</h1>
              <p className="text-xs text-gray-500">Quality resources for competitive exams</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#team" className="hover:text-indigo-600">Team</a>
            <a href="#publishers" className="hover:text-indigo-600">Publishers</a>
            <a href="#upcoming" className="hover:text-indigo-600">Upcoming</a>
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Learners & Educators for Competitive Success
            </h2>
            <p className="mt-6 text-lg text-indigo-100/90">
              High-quality content, expertly authored notes, and exam-focused books for IIT-JEE, NEET, UPSC,
              SSC, Banking, Boards and more. Trusted by teachers, coaching institutes and students across India.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 rounded font-semibold">Get in Touch</a>
              <a href="#services" className="px-6 py-3 border border-white/30 rounded text-white">Explore Services</a>
            </div>

            <div className="mt-6 text-sm text-indigo-100/80">
              50+ subject experts • Collaborations with leading publishers • Offline & digital resources
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 p-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="students"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">About The Aspirants</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At <span className="font-semibold">The Aspirants</span>, we are committed to transforming education
              by providing high-quality learning resources for both students and educators. Whether it’s
              <span className="font-medium"> IIT-JEE, NEET, SSC, Banking, UPSC</span> or Board exams, our content
              is designed to make preparation reliable, accessible, and impactful.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our team of <span className="font-semibold">50+ subject experts</span> develops comprehensive notes,
              practice materials, and assessments to support teachers, institutions, and learners. We also
              collaborate with leading publishers to author books and study guides that aspirants can trust.
            </p>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Our Mission</h4>
              <p className="mt-2 text-gray-600">
                To empower educators and inspire students by delivering academic excellence, innovative solutions,
                and exam-focused content that paves the way to success.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Content for IIT-JEE, NEET, UPSC, SSC, Banking & Boards</li>
                <li>• 50+ in-house subject experts & collaborators</li>
                <li>• Publisher partnerships for print study materials</li>
                <li>• Custom solutions for coaching institutes & schools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Exams */}
      <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center">What We Offer</h3>
          <p className="text-center text-gray-600 mt-2">
            Content, assessments, books, and solutions tailored for different exams and teaching needs.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IIT-JEE', desc: 'Concept notes, problem sets, mock tests' },
              { title: 'NEET', desc: 'Topic-wise revision, previous year questions' },
              { title: 'UPSC', desc: 'Optional guidance, test series, notes' },
              { title: 'SSC & Banking', desc: 'Quant, Reasoning, GK resources' },
              { title: 'Boards', desc: 'Syllabus-mapped notes & assessments' },
              { title: 'Institute Packages', desc: 'Custom question banks & lesson plans' },
              { title: 'Books & Publishers', desc: 'Co-authored textbooks & guides' },
              { title: 'Teacher Resources', desc: 'Presentations, worksheets & training' }
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center">Meet Our Experts</h3>
        <p className="text-center text-gray-600 mt-2">
          Our divisions are led by experienced educators and subject specialists.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-indigo-600">Overall Head</h4>
            <p className="mt-2 font-medium">Akash Saini</p>
            <p className="text-sm text-gray-600">M.Sc. Mathematics, IIT Bombay | GS & Quant Expert</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-indigo-600">JEE Division</h4>
            <p className="mt-2 font-medium">Ashish Sir</p>
            <p className="text-sm text-gray-600">B.Tech, IIT Delhi | Subject Expert</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-indigo-600">SSC & Banking</h4>
            <p className="mt-2 font-medium">Alok Sir</p>
            <p className="text-sm text-gray-600">Selected as RAS | SSC & Banking Specialist</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-indigo-600">UPSC, CDS & CAPF</h4>
            <p className="mt-2 font medium">Rahul Sir</p>
            <p className="text-sm text-gray-600">3+ years experience in Defence Exams</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-indigo-600">Other Exams</h4>
            <p className="mt-2 font-medium">Ashish Sir</p>
            <p className="text-sm text-gray-600">Manager | Experienced in multiple exam categories</p>
          </div>
        </div>
      </section>

      {/* Publishers */}
      <section id="publishers" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold">Publisher Collaborations</h3>
          <p className="text-gray-600 mt-2">
            We partner with well-known educational publishers to co-author textbooks and guides tailored for competitive exam aspirants.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <div className="p-4 bg-white rounded shadow-sm">Publisher A</div>
            <div className="p-4 bg-white rounded shadow-sm">Publisher B</div>
            <div className="p-4 bg-white rounded shadow-sm">Publisher C</div>
            <div className="p-4 bg-white rounded shadow-sm">Academic Press</div>
          </div>
        </div>
      </section>

      {/* Upcoming Publication */}
      <section id="upcoming" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center">Upcoming Publication</h3>
          <p className="text-center text-gray-600 mt-2">
            Presenting our next big release for competitive exam aspirants.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Book Cover using Canva image */}
            <div className="flex justify-center">
              <img
                src="/book-cover.png"
                alt="The Untold Indian Economy — Book Cover"
                className="w-64 h-auto rounded-xl shadow-xl object-cover"
              />
            </div>

            {/* Book Details */}
            <div>
              <h4 className="text-xl font-semibold text-indigo-600">The Untold Indian Economy</h4>
              <p className="mt-3 text-gray-700 leading-relaxed">
                This upcoming book is designed as a comprehensive resource for Indian Economy, simplifying complex
                topics into exam-ready content. It’s tailored for government exam aspirants including SSC, Banking,
                PCS, CDS, CAPF, and other one-day exams.
              </p>
              <p className="mt-3 text-gray-700">
                Authored by <span className="font-semibold">Akash Saini</span>, the book combines clarity, depth, and
                exam-oriented preparation strategies.
              </p>
              <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded">
                <p className="text-sm text-indigo-700">
                  Expected Release: <span className="font-medium">Coming Soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Work with us</h3>
            <p className="mt-3 text-gray-600">
              Whether you are a school, coaching institute, publisher, or an aspiring student — let's create the right
              solution for your needs. Tell us what you're looking for and we'll get back with a tailored plan.
            </p>

            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>• Institutional content packages</li>
              <li>• Book collaborations & co-authorship</li>
              <li>• Custom question banks & mock tests</li>
            </ul>
          </div>

          <form className="bg-white rounded-lg p-6 shadow-sm">
            <label className="text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              placeholder="Your name"
            />

            <label className="text-sm font-medium mt-3">Email</label>
            <input
              className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              placeholder="you@example.com"
            />

            <label className="text-sm font-medium mt-3">Message</label>
            <textarea
              className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              rows="4"
              placeholder="How can we help?"
            />

            <button
              type="button"
              className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} The Aspirants. All rights reserved.</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
