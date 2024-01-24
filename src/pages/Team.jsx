import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const teamMember = [
    {
      id: 1,
      name: 'Patrick Mwadori',
      role: 'Chief Executive Officer',
      image: '/patrick.jpg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    },
    {
      id: 2,
      name: 'Nuru Tsuma',
      role: 'Project Manager',
      image: '/Nuru.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 3,
      name: 'Louze Zawadi Alfred',
      role: 'Project Ass & Office Admin',
      image: '/Louze.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 4,
      name: 'Dalton Curtis Ouma',
      role: 'Project Lead - Samburu Kinango',
      image: '/Dalton.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 5,
      name: 'Shukran Thuva',
      role: 'Project Lead - Malindi/Magarini',
      image: '/Shukran.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 6,
      name: 'Kipngeno Rono',
      role: 'Project Lead - Kajiado',
      image: '/Kipngeno.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 7,
      name: 'Omar Kofa Komora',
      role: 'Finance',
      image: '/Kofa.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    }, {
      id: 8,
      name: 'Aswani Swaleh',
      role: 'Project Lead',
      image: '/Swale.jpeg',
      socialLinks: [
        { name: 'Linkedin', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'twitter', url: '#' },
      ],
    },
  ];
  return (
    <section className="dark:bg-gray-900"> 
    <div className="container px-6 py-8 mx-auto ">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Our Executive Team
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
     At Dancon View Limited, our team is a dynamic collective united by a common purpose. 
    Guided by our vision to be the leading Energy Transition Partner in Africa, each member
    brings distinctive skills and expertise, contributing to our shared journey. Together,
    we are committed to driving innovation, fostering collaboration, and creating a lasting
    impact in the field of energy. Get acquainted with the individuals who form the backbone
    of our success below.
      </p>
      <div className="grid  grid-cols-1 gap-8 mt-8  md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 ">
        {teamMember.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-400 dark:border-gray-700 dark:hover:border-transparent"
          >
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={member.image}
              alt={member.name}
            />
            <h1 className="mt-4 text-lg font-semibold text-gray-700 capitalize dark:text-white">
              {member.name}
            </h1>
            <p className="mt-2 text-sm text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              {member.role}
            </p>
            <div className="flex mt-3 mx-2">
              {member.socialLinks.map((socialLink, index) => {
                const IconComponent = getIconComponent(socialLink.name.toLowerCase());

                  if (IconComponent) {
                    return (
                      <a
                        key={index}
                        href={socialLink.url}
                        className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label={socialLink.name}
                      >
                        <IconComponent />
                      </a>
                    );
                  }

                  return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const getIconComponent = (socialName) => {
  switch (socialName) {
    case 'linkedin':
      return FaLinkedin;
    case 'facebook':
      return FaFacebook;
    case 'twitter':
      return FaTwitter;
    default:
      return null;
  }
};

export default Team;