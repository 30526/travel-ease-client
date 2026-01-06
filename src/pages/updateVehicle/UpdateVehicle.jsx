import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Save,
  Image as ImageIcon,
  Car,
  Settings,
  DollarSign,
  CheckCircle2,
  Trash2,
  Plus,
} from "lucide-react";
import useAxios from "../../hooks/useAxios";

const UpdateVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    vehicleName: "",
    brand: "",
    year: "",
    category: "",
    transmission: "",
    fuelType: "",
    seats: "",
    mileage: "",
    condition: "",
    pricePerDay: "",
    availability: "",
    coverImage: "",
    description: "",
  });

  const axios = useAxios();

  // 1. Fetch existing data on mount
  useEffect(() => {
    axios
      .get(`/vehicles/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vehicle:", err);
        setLoading(false);
      });
  }, [axios, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/vehicles/${id}`, formData);
      alert("Vehicle updated successfully!");
      navigate("/my-vehicles");
    } catch (err) {
      console.error("Update failed:", err);
    }
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

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner text-amber-500"></span>
      </div>
    );

  const inputStyle =
    "input input-bordered w-full focus:outline-none focus:border-amber-500 transition-all duration-200 bg-slate-50 border-slate-200";
  const labelStyle =
    "label-text font-bold text-slate-700 uppercase text-[11px] tracking-widest mb-1 block";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold transition-colors"
        >
          <ArrowLeft size={20} /> Back to Fleet
        </button>
        <h1 className="text-2xl font-black text-slate-900">
          Update <span className="text-amber-500 font-medium">Vehicle</span>
        </h1>
      </div>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section 1: General Info */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <Car size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                General Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>Vehicle Name</label>
                <input
                  type="text"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="e.g. Toyota Corolla"
                />
              </div>
              <div>
                <label className={labelStyle}>Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="e.g. Toyota"
                />
              </div>
              <div>
                <label className={labelStyle}>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="select select-bordered w-full focus:outline-none focus:border-amber-500 bg-slate-50"
                >
                  <option value="">Select Category</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Technical Specs */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Settings size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Technical Specifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelStyle}>Transmission</label>
                <input
                  type="text"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Auto/Manual"
                />
              </div>
              <div>
                <label className={labelStyle}>Fuel Type</label>
                <input
                  type="text"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className={labelStyle}>Seats</label>
                <input
                  type="number"
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Section 3: Description */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <label className={labelStyle}>Vehicle Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-32 focus:outline-none focus:border-amber-500 bg-slate-50"
              placeholder="Tell users about the car's features..."
            ></textarea>
          </div>
        </div>

        {/* Right Column: Pricing & Media */}
        <div className="space-y-8">
          {/* Pricing Card */}
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6 text-amber-400">
              <DollarSign size={24} />
              <h2 className="text-lg font-bold">Pricing & Status</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="label-text font-bold text-slate-400 uppercase text-[10px] tracking-widest block mb-2">
                  Daily Rate ($)
                </label>
                <input
                  type="number"
                  name="pricePerDay"
                  value={formData.pricePerDay}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border-none rounded-xl h-12 px-4 focus:ring-2 focus:ring-amber-500 outline-none text-xl font-black"
                />
              </div>
              <div>
                <label className="label-text font-bold text-slate-400 uppercase text-[10px] tracking-widest block mb-2">
                  Listing Status
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border-none rounded-xl h-12 px-4 focus:ring-2 focus:ring-amber-500 outline-none font-bold"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Image Preview Card */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <label className={labelStyle}>Vehicle Image URL</label>
            <div className="relative mb-4">
              <ImageIcon
                className="absolute left-3 top-3.5 text-slate-400"
                size={18}
              />
              <input
                type="text"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className={`${inputStyle} pl-10`}
              />
            </div>
            {formData.coverImage && (
              <div className="rounded-2xl overflow-hidden h-40 border border-slate-100">
                <img
                  src={formData.coverImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* galleryImages */}
            <div className="form-control mt-4">
              <label className={labelStyle}>Gallery Images URL</label>
              {formData.galleryImages.map((url, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  {url ? (
                    <>
                      <img
                        className="w-15"
                        src={url}
                        alt={formData.vehicleName}
                      />
                      <input
                        type="url"
                        value={url}
                        placeholder="Gallery Image URL"
                        className={inputStyle}
                        onChange={(e) =>
                          handleGalleryChange(index, e.target.value)
                        }
                      />
                    </>
                  ) : (
                    <input
                      type="url"
                      value={url}
                      placeholder="Gallery Image URL"
                      className={inputStyle}
                      onChange={(e) =>
                        handleGalleryChange(index, e.target.value)
                      }
                    />
                  )}
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

          {/* Final Action Button */}
          <button
            type="submit"
            className="btn w-full bg-amber-400 hover:bg-amber-500 border-none text-slate-900 font-black text-lg h-16 rounded-2xl shadow-lg shadow-amber-200 gap-2 transition-transform hover:scale-[1.02]"
          >
            <Save size={20} /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVehicle;
