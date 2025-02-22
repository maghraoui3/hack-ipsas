import Image from "next/image";

export default function Presentation() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67]">About IPSAS</h1>
        
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="IPSAS Campus"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            The Institut Polytechnique des Sciences Avancées de Sfax (IPSAS) is a leading engineering institution in Tunisia, committed to excellence in education, research, and innovation.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B2C67] mt-8 mb-4">Our Institution</h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to shape the future of engineering education in Tunisia, IPSAS has established itself as a center of academic excellence and innovation. Our institution brings together talented students, distinguished faculty, and cutting-edge facilities to create an environment that fosters learning, research, and professional development.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B2C67] mt-8 mb-4">Academic Excellence</h2>
          <p className="text-gray-600 mb-6">
            At IPSAS, we offer a comprehensive range of engineering programs designed to meet the evolving needs of industry and society. Our curriculum combines theoretical knowledge with practical experience, ensuring our graduates are well-prepared for the challenges of their chosen fields.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] mb-4">Research & Innovation</h3>
              <p className="text-gray-600">
                Our research centers and laboratories are equipped with state-of-the-art technology, enabling groundbreaking research in various engineering disciplines.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] mb-4">Industry Partnerships</h3>
              <p className="text-gray-600">
                We maintain strong relationships with industry leaders, providing our students with invaluable internship opportunities and real-world experience.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#0B2C67] mt-8 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            IPSAS is committed to providing a supportive and inclusive learning environment where students can develop their skills, pursue their passions, and prepare for successful careers in engineering and technology.
          </p>
        </div>
      </div>
    </div>
  );
}