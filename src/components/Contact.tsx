"use client";

import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  suburb?: string;
  carType?: string;
  service?: string;
  preferredDay?: string;
  preferredTime?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    carType: "",
    service: "",
    preferredDay: "",
    preferredTime: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.suburb) {
      newErrors.suburb = "Please select your suburb";
    }

    if (!formData.carType) {
      newErrors.carType = "Please select your car type";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.preferredDay) {
      newErrors.preferredDay = "Please select a preferred day";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          suburb: "",
          carType: "",
          service: "",
          preferredDay: "",
          preferredTime: "",
          message: "",
        });
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-maxxar-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-maxxar-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ready to never worry about a dirty car again? Book your first mobile detail in Bayside.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 bg-maxxar-blue/20 rounded-xl flex items-center justify-center text-maxxar-blue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-medium">0422 222 883</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 bg-maxxar-blue/20 rounded-xl flex items-center justify-center text-maxxar-blue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">info@maxxar.com.au</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 bg-maxxar-blue/20 rounded-xl flex items-center justify-center text-maxxar-blue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Service Area</p>
                  <p className="text-white font-medium">Serving all Bayside suburbs</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 bg-maxxar-blue/20 rounded-xl flex items-center justify-center text-maxxar-blue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Note</p>
                  <p className="text-white font-medium">Water & Power supply required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Success Message */}
              {submitStatus === "success" && (
                <div
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-100"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold">Thanks for your enquiry!</p>
                      <p className="text-sm">We&apos;ll be in touch soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold">Oops! Something went wrong.</p>
                      <p className="text-sm">Please try again later.</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 focus:ring-2 focus:ring-maxxar-blue focus:border-transparent transition-all outline-none`}
                  placeholder="Your name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 focus:ring-2 focus:ring-maxxar-blue focus:border-transparent transition-all outline-none`}
                  placeholder="you@email.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.phone ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-400 focus:ring-2 focus:ring-maxxar-blue focus:border-transparent transition-all outline-none`}
                  placeholder="0400 000 000"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-gray-300 mb-2">
                    Suburb <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="suburb"
                      value={formData.suburb}
                      onChange={(e) => {
                        setFormData({ ...formData, suburb: e.target.value });
                        if (errors.suburb) setErrors({ ...errors, suburb: undefined });
                      }}
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/10 border-2 ${
                        errors.suburb ? "border-red-500" : "border-white/20 hover:border-white/30"
                      } text-white focus:ring-2 focus:ring-maxxar-blue focus:border-maxxar-blue transition-all outline-none appearance-none cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.suburb}
                      aria-describedby={errors.suburb ? "suburb-error" : undefined}
                    >
                    <option value="" className="bg-maxxar-dark">Select your suburb</option>
                    <option value="brighton" className="bg-maxxar-dark">Brighton</option>
                    <option value="hampton" className="bg-maxxar-dark">Hampton</option>
                    <option value="sandringham" className="bg-maxxar-dark">Sandringham</option>
                    <option value="beaumaris" className="bg-maxxar-dark">Beaumaris</option>
                    <option value="highett" className="bg-maxxar-dark">Highett</option>
                    <option value="cheltenham" className="bg-maxxar-dark">Cheltenham</option>
                    <option value="black-rock" className="bg-maxxar-dark">Black Rock</option>
                    <option value="mentone" className="bg-maxxar-dark">Mentone</option>
                    <option value="other" className="bg-maxxar-dark">Other Bayside suburb</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.suburb && (
                    <p id="suburb-error" className="mt-2 text-sm text-red-400" role="alert">
                      {errors.suburb}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="carType" className="block text-sm font-medium text-gray-300 mb-2">
                    Car Type <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="carType"
                      value={formData.carType}
                      onChange={(e) => {
                        setFormData({ ...formData, carType: e.target.value });
                        if (errors.carType) setErrors({ ...errors, carType: undefined });
                      }}
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/10 border-2 ${
                        errors.carType ? "border-red-500" : "border-white/20 hover:border-white/30"
                      } text-white focus:ring-2 focus:ring-maxxar-blue focus:border-maxxar-blue transition-all outline-none appearance-none cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.carType}
                      aria-describedby={errors.carType ? "carType-error" : undefined}
                    >
                      <option value="" className="bg-maxxar-dark">Select your car type</option>
                      <option value="sedan" className="bg-maxxar-dark">Sedan</option>
                      <option value="suv" className="bg-maxxar-dark">SUV/4WD</option>
                      <option value="hatchback" className="bg-maxxar-dark">Hatchback</option>
                      <option value="ute" className="bg-maxxar-dark">Ute</option>
                      <option value="wagon" className="bg-maxxar-dark">Wagon</option>
                      <option value="luxury" className="bg-maxxar-dark">Luxury/European</option>
                      <option value="multiple" className="bg-maxxar-dark">Multiple vehicles</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.carType && (
                    <p id="carType-error" className="mt-2 text-sm text-red-400" role="alert">
                      {errors.carType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/10 border-2 ${
                      errors.service ? "border-red-500" : "border-white/20 hover:border-white/30"
                    } text-white focus:ring-2 focus:ring-maxxar-blue focus:border-maxxar-blue transition-all outline-none appearance-none cursor-pointer`}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="" className="bg-maxxar-dark">Select a service</option>
                    <option value="mini" className="bg-maxxar-dark">Mini Detail - $130</option>
                    <option value="full" className="bg-maxxar-dark">Full Detail Package - $225</option>
                    <option value="paint" className="bg-maxxar-dark">Full Detail + Paint Correction - $465</option>
                    <option value="reset" className="bg-maxxar-dark">The Full Reset + Longevity - $880</option>
                    <option value="custom" className="bg-maxxar-dark">Custom Quote</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p id="service-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDay" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Day <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredDay"
                      value={formData.preferredDay}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDay: e.target.value });
                        if (errors.preferredDay) setErrors({ ...errors, preferredDay: undefined });
                      }}
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/10 border-2 ${
                        errors.preferredDay ? "border-red-500" : "border-white/20 hover:border-white/30"
                      } text-white focus:ring-2 focus:ring-maxxar-blue focus:border-maxxar-blue transition-all outline-none appearance-none cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.preferredDay}
                      aria-describedby={errors.preferredDay ? "preferredDay-error" : undefined}
                    >
                      <option value="" className="bg-maxxar-dark">Select a day</option>
                      <option value="monday" className="bg-maxxar-dark">Monday</option>
                      <option value="tuesday" className="bg-maxxar-dark">Tuesday</option>
                      <option value="wednesday" className="bg-maxxar-dark">Wednesday</option>
                      <option value="thursday" className="bg-maxxar-dark">Thursday</option>
                      <option value="friday" className="bg-maxxar-dark">Friday</option>
                      <option value="saturday" className="bg-maxxar-dark">Saturday</option>
                      <option value="any" className="bg-maxxar-dark">Any day</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.preferredDay && (
                    <p id="preferredDay-error" className="mt-2 text-sm text-red-400" role="alert">
                      {errors.preferredDay}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredTime: e.target.value });
                        if (errors.preferredTime) setErrors({ ...errors, preferredTime: undefined });
                      }}
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-white/10 border-2 ${
                        errors.preferredTime ? "border-red-500" : "border-white/20 hover:border-white/30"
                      } text-white focus:ring-2 focus:ring-maxxar-blue focus:border-maxxar-blue transition-all outline-none appearance-none cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.preferredTime}
                      aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
                    >
                      <option value="" className="bg-maxxar-dark">Select a time</option>
                      <option value="morning" className="bg-maxxar-dark">Morning (8am-12pm)</option>
                      <option value="afternoon" className="bg-maxxar-dark">Afternoon (12pm-4pm)</option>
                      <option value="evening" className="bg-maxxar-dark">Evening (4pm-6pm)</option>
                      <option value="flexible" className="bg-maxxar-dark">Flexible</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.preferredTime && (
                    <p id="preferredTime-error" className="mt-2 text-sm text-red-400" role="alert">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-maxxar-blue focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your car or any special requests..."
                  aria-describedby="message-description"
                />
                <p id="message-description" className="sr-only">Optional field for additional information about your car or special requests</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-maxxar-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-maxxar-blue/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                We&apos;ll confirm your booking via SMS within 2 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
