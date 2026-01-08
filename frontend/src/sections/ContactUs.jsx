import React from "react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 md:px-16">
      
      {/* Soft Backdrop */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[45rem] h-[22rem] bg-gradient-to-tr from-indigo-800/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-20 w-[30rem] h-[14rem] bg-gradient-to-bl from-indigo-700/30 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Card */}
      <div className="w-full max-w-xl rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-2xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-zinc-400">
            Have questions, feedback, or ideas?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full resize-none px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;