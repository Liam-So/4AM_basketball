import Topbar from "../../Topbar/Topbar";

const Scholarship = () => {
  return (
    <div>
      <div className="header">
        <Topbar />
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p class="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
