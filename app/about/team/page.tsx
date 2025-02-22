import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Sarah Ben Ali",
    role: "Dean of Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Dr. Ben Ali brings over 20 years of experience in engineering education and research.",
  },
  {
    name: "Prof. Mohamed Karim",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Leading our research initiatives in sustainable engineering and innovation.",
  },
  {
    name: "Dr. Leila Mansour",
    role: "Director of Student Affairs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Dedicated to ensuring student success and well-being throughout their academic journey.",
  },
  {
    name: "Prof. Ahmed Taleb",
    role: "Department Head - Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Specializing in artificial intelligence and software engineering education.",
  },
];

export default function Team() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67]">Our Team</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Meet the dedicated professionals who make IPSAS a center of excellence in engineering education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B2C67] mb-2">{member.name}</h3>
                <p className="text-[#318CE7] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}