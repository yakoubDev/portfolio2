"use client";
import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  MapPin,
  Clock,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [loading, setLaoding] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.service ||
        !formData.description
      ) {
        return toast.error("Please fill out the fields");
      }

      if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
        return toast.error("Please enter a valid phone number");
      }

      setLaoding(true);
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        return toast.error("Something went wrong...");
      }

      const result = await response.json();
      toast.success(result.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Server error..., please try again");
    } finally {
      setLaoding(false);
    }
  };

  const services = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Consulting",
    "Other",
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            Get In Touch
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight mb-6">
            Let's Work Together
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Send Me a Message
            </h2>

            <div className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={20}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === "fullName"
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-700/70 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={20}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === "email"
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-700/70 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <div
                  className={`relative  border border-gray-600/50 focus-within:bg-gray-700/70 focus-within:border-cyan-500/50  rounded-lg `}
                >
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={formData.phone || ""}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, phone: value || "" }))
                    }
                    defaultCountry="DZ"
                    international
                    className={`w-full pl-4 pr-4 py-4 bg-gray-700/50  rounded-lg text-white placeholder-gray-400  transition-all duration-300 `}
                    numberInputProps={{
                      className: "outline-none",
                    }}
                    countrySelectProps={{
                      className: "bg-gray-900",
                    }}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>
              </div>

              {/* Service */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Service Required
                </label>
                <div className="relative">
                  <Briefcase
                    size={20}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === "service"
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:bg-gray-700/70 transition-all duration-300 appearance-none"
                    required
                  >
                    <option value="" className="bg-gray-800">
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="bg-gray-800"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="text-gray-400"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                  Project Description
                </label>
                <div className="relative">
                  <MessageSquare
                    size={20}
                    className={`absolute left-4 top-4 transition-colors duration-300 ${
                      focusedField === "description"
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField("")}
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-700/70 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 group"
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                {loading ? "Sending" : "Send Message"}
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      ahcenetayebi@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      +213 659 170 552
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                    <MapPin size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">
                      Annaba, Algeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Availability
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-cyan-400" />
                  <span className="text-gray-300">
                    Response Time: Within 24 hours
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-blue-400" />
                  <span className="text-gray-300">Timezone: UTC + 1</span>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-cyan-400 font-medium text-sm">
                    🚀 Currently available for new projects
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick FAQ</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-cyan-400 font-medium mb-1">
                    How long does a typical project take?
                  </p>
                  <p className="text-gray-400">
                    Most projects are completed within 2-8 weeks, depending on
                    complexity.
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 font-medium mb-1">
                    Do you work with international clients?
                  </p>
                  <p className="text-gray-400">
                    Yes! I work with clients worldwide and adapt to different
                    timezones.
                  </p>
                </div>

                <div>
                  <p className="text-green-400 font-medium mb-1">
                    What's your preferred communication method?
                  </p>
                  <p className="text-gray-400">
                    Email for formal discussions, with video calls for project
                    kickoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
