import emptyImage from "../assets/empty.png";

const EmptyMessage = () => {
  return (
    <div className="space-y-4">
      <img className="w-52 mx-auto mt-10" src={emptyImage} alt="empty Image" />
      <h2 className="text-center text-3xl">No Result Found</h2>
      <p className="text-center text-gray-600">Try adjusting your search or filter to find what you are looking for.</p>
    </div>
  );
};

export default EmptyMessage;
