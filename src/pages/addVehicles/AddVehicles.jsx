import React, { useState } from "react";
import { FaUpload } from "react-icons/fa6";
import "./vehicle.css";
import {
  Car,
  Settings,
  Image as ImageIcon,
  MapPin,
  User,
  DollarSign,
  ClipboardList,
  Plus,
  Trash2,
} from "lucide-react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const AddVehicles = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    vehicleName: "",
    brand: "",
    model: "",
    category: "Sedan",
    bodyType: "",
    condition: "New",
    year: 2024,
    engineSize: "",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "FWD",
    mileage: "",
    doors: 4,
    seats: 5,
    colorOptions: "",
    pricePerDay: "",
    range: "",
    location: "",
    availability: "Available",
    description: "",
    coverImage: "",
    galleryImages: [""],
    owner: "",
    userEmail: "",
  });

  const vehicleDataWithTime = {
    ...formData,
    createdAt: new Date().toISOString(),
    userEmail: user?.email || formData.userEmail,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGalleryChange = (index, value) => {
    const updatedGallery = [...formData.galleryImages];
    updatedGallery[index] = value;
    setFormData((prev) => ({ ...prev, galleryImages: updatedGallery }));
  };

  const addGalleryField = () => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: [...prev.galleryImages, ""],
    }));
  };

  const removeGalleryField = (index) => {
    const updatedGallery = formData.galleryImages.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, galleryImages: updatedGallery }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Final Vehicle Data:", vehicleDataWithTime);
    axios
      .post("/vehicles", vehicleDataWithTime)
      .then(() => {
        alert("Vehicle added successfully!");
      })
      .catch((err) => {
        console.error("Error adding vehicle:", err);
      });
      e.target.reset();
  };

  // Reusable Tailwind class for all inputs
  const inputClass =
    "input input-bordered w-full focus:outline-none focus:border-amber-400 transition-colors";
  const selectClass =
    "select select-bordered w-full focus:outline-none focus:border-amber-400 transition-colors";
  const textareaClass =
    "textarea textarea-bordered w-full h-32 focus:outline-none focus:border-amber-400 transition-colors";

  return (
    <div className="max-w-5xl mx-auto my-10 p-4 md:p-8">
      <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-200">
        {/* Header - Using Slate 900 for a professional contrast with Amber */}
        <div className="bg-slate-900 p-8 text-white">
          <h1 className="text-3xl font-extrabold flex items-center gap-3">
            <Car className="text-amber-400 w-8 h-8" />
            Post Your <span className="text-amber-400">Vehicle</span>
          </h1>
          <p className="text-slate-400 mt-2">
            Professional listing for the TravelEase marketplace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-10">
          {/* Section 1: Basic Information */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-amber-100 pb-2">
              <ClipboardList className="text-amber-500" />
              <h2 className="text-xl font-bold text-slate-800">
                General Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  name="vehicleName"
                  placeholder="Toyota Corolla"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Toyota"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  placeholder="Corolla Altis"
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Category
                </label>
                <select
                  name="category"
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                  <option>Electric</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  defaultValue="2024"
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Condition
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="New"
                      checked={formData.condition === "New"}
                      className="radio checked:bg-amber-400 border-amber-400"
                      onChange={handleChange}
                    />
                    <span className="text-slate-600">New</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="Used"
                      checked={formData.condition === "Used"}
                      className="radio checked:bg-amber-400 border-amber-400"
                      onChange={handleChange}
                    />
                    <span className="text-slate-600">Old</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Technical Specs */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-amber-100 pb-2">
              <Settings className="text-amber-500" />
              <h2 className="text-xl font-bold text-slate-800">
                Technical Specifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Transmission
                </label>
                <select
                  name="transmission"
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Mileage (KM/L)
                </label>
                <input
                  type="number"
                  name="mileage"
                  placeholder="15"
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Seats
                </label>
                <input
                  type="number"
                  name="seats"
                  defaultValue="5"
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Section 3: Pricing & Media */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-amber-100 pb-2">
                <DollarSign className="text-amber-500" />
                <h2 className="text-xl font-bold text-slate-800">
                  Pricing & Location
                </h2>
              </div>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label font-semibold text-slate-700">
                    Price Per Day ($)
                  </label>
                  <input
                    type="number"
                    name="pricePerDay"
                    placeholder="70"
                    className={`${inputClass} bg-amber-50/30 font-bold text-amber-700 border-amber-200`}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-semibold text-slate-700">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Dhaka, Bangladesh"
                      className={`${inputClass} pl-10`}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-amber-100 pb-2">
                <ImageIcon className="text-amber-500" />
                <h2 className="text-xl font-bold text-slate-800">
                  Media Assets
                </h2>
              </div>
              <div className="form-control mb-4">
                <label className="label font-semibold text-slate-700">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  name="coverImage"
                  placeholder="https://..."
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Gallery Images
                </label>
                {formData.galleryImages.map((url, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={url}
                      placeholder="Gallery Image URL"
                      className={inputClass}
                      onChange={(e) =>
                        handleGalleryChange(index, e.target.value)
                      }
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeGalleryField(index)}
                        className="btn btn-square btn-outline border-slate-200 hover:bg-red-50 hover:border-red-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addGalleryField}
                  className="btn btn-sm btn-ghost text-amber-600 gap-2 mt-2"
                >
                  <Plus size={16} /> Add More Images
                </button>
              </div>
            </div>
          </section>

          {/* Section 4: Seller Info & Description */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-amber-100 pb-2">
              <User className="text-amber-500" />
              <h2 className="text-xl font-bold text-slate-800">
                Seller & Description
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="owner"
                  value={user?.displayName}
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-slate-700">
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user?.email}
                  className={inputClass}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label font-semibold text-slate-700">
                Full Description
              </label>
              <textarea
                name="description"
                className={textareaClass}
                placeholder="Vehicle features..."
                onChange={handleChange}
              ></textarea>
            </div>
          </section>

          {/* Final Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="btn w-full bg-amber-400 hover:bg-slate-900 hover:text-white border-none text-slate-900 font-extrabold text-xl rounded-2xl h-16 transition-all duration-300"
            >
              Publish Listing Now
              <FaUpload className="uploadIcon"></FaUpload>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicles;
