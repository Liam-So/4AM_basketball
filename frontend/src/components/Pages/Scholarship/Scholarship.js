import Topbar from "../../Topbar/Topbar";
import "./Scholarship.css";

const Scholarship = () => {
  return (
    <div>
      <div className="header">
        <Topbar transparent={true} />
      </div>

      <section className="bg-gray-100 max-w-7x1 mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Enter your contact information here.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="phone_number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country / Region
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          for="street_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street_address"
                          id="street_address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          for="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal
                        </label>
                        <input
                          type="text"
                          name="postal_code"
                          id="postal_code"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Upload File
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                for="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PDF, DOC up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
