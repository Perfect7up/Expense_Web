
const IntegrationSection = () => {
  const partners = [
    { name: 'Oracle NetSuite', position: 'left-24 top-4', url: 'https://i.pinimg.com/736x/d4/42/b8/d442b8bfd2cb39ff93d06b23d04da300.jpg' },
    { name: 'Microsoft Dynamics', position: 'right-64 top-8', url: 'https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo.png' },
    { name: 'Freshbooks', position: 'right-32 top-24', url: "https://cdn.worldvectorlogo.com/logos/freshbooks-2021-logo.svg" },
    { name: 'Xero', position: 'right-8 top-16', url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Xero_software_logo.svg" },
    { name: 'Workday', position: 'left-48 top-32', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsBjN8xTA4xRKHfO9sKhShUogZRyUKL56cw&s" },
    { name: 'Lyft', position: 'right-36 bottom-32', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs02Ekc5XkSbiHbn3rH9-Vkzyn7cLpjd0IQ&s" },
    { name: 'Sage', position: 'left-16 bottom-32', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sage-logo_svg.svg/1200px-Sage-logo_svg.svg.png" },
    { name: 'QuickBooks', position: 'right-16 bottom-16', url: "https://w7.pngwing.com/pngs/564/584/png-transparent-quickbooks-accounting-software-computer-software-invoice-others-miscellaneous-text-trademark-thumbnail.png" },
    { name: 'Bolt', position: 'left-64 bottom-16', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kSd0XjKp0TOA46vPxPsnB6v2CXxA_KVRXA&s" },
    { name: 'Uber', position: 'left-32 bottom-48', url: "https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" },
    { name: 'ANZ', position: 'right-48 bottom-48', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/ANZ-Logo-2009.svg/1200px-ANZ-Logo-2009.svg.png" }
  ];

  return (
    <div className="py-24 px-4 relative bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Background circles and dotted lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow" 
                 style={{ width: '90%', height: '90%', left: '5%', top: '5%' }} />
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full" 
                 style={{ width: '70%', height: '70%', left: '15%', top: '15%' }} />
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full" 
                 style={{ width: '50%', height: '50%', left: '25%', top: '25%' }} />
          </div>

          {/* Partner logos */}
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`absolute bg-white rounded-full p-4 shadow-lg ${partner.position}`}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={partner.url}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}

          {/* Center Expense App logo and text */}
          <div className="relative z-10 text-center">
            <div className="bg-emerald-400 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">E</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">40+ Integrations</h2>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              See All Integrations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;