const Navigation = () => {
  return (
    <div className="font-inter fixed top-0 left-0 w-full h-16 backdrop-blur-sm mask-[linear-gradient(to_bottom,black_70%,transparent_100%)] bg-black flex items-center justify-between px-8 z-50">
        <div className="text-white text-xl font-bold">
            interiors.in
        </div>
        <div className="flex items-center space-x-8">
            <div className="text-white hover:text-gray-300 cursor-pointer transition-colors">Home</div>
            <div className="text-white hover:text-gray-300 cursor-pointer transition-colors">Order</div>
            <div className="text-white hover:text-gray-300 cursor-pointer transition-colors">About</div>
            <div className="text-white hover:text-gray-300 cursor-pointer transition-colors">Contact</div>
        </div>
        <div>
      <button className="hover:shadow-md shadow-white shadow-sm px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transition duration-400">
  Sign In
</button>   
        </div>
    </div>
    );
};

export default Navigation;