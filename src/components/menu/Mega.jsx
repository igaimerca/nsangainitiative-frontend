import tw from 'twin.macro';

const MegaMenu = ({ children }) => {
  return (
    <div className="pb-1 my-2 text-lg font-semibold tracking-wide transition duration-300 border-b-2 border-transparent group lg:text-sm lg:mx-6 lg:my-0 hover:border-primary-500 hocus:text-primary-500">
      <a href="#hi" className="">{children}</a>
    </div>
  );
};

export default MegaMenu;