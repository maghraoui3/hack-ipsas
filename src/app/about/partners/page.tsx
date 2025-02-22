import Image from "next/image";

const partners = [
  {
    name: "Tunisian Engineering Association",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    description: "Collaborating on professional development and industry standards.",
  },
  {
    name: "Global Tech Solutions",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Providing internship opportunities and industry projects.",
  },
  {
    name: "Research Institute of Technology",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "Joint research initiatives and knowledge exchange programs.",
  },
  {
    name: "Innovation Hub",
    logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "Supporting startup incubation and entrepreneurship programs.",
  },
];

export default function Partners() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67]">Our Partners</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          IPSAS collaborates with leading organizations to provide our students with the best opportunities for learning and professional development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="relative w-40 h-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-[#0B2C67] mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#0B2C67] mb-4">Become a Partner</h2>
          <p className="text-gray-600 mb-6">
            We're always looking to expand our network of partners. If you're interested in collaborating with IPSAS, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0B2C67] text-white px-6 py-3 rounded-lg hover:bg-[#318CE7] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}