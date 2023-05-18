import tw from 'twin.macro';

const MegaMenuItem = tw.a`
  relative inline-block text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const MegaMenu = () => {
  return (
    <div className="relative">
      <MegaMenuItem href="#">Menu Item</MegaMenuItem>
      <div className="absolute hidden w-full">
        {/* Mega Menu Content */}
        <div className="p-4 bg-white shadow-md">
          {/* Mega Menu Content */}
          {/* Add your mega menu content here */}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;