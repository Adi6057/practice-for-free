import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Tagline or Summary */}
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Dive Deeper into the Stories That Move You
          </h3>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Explore the passion, drama, and legacy behind every frame. 
            Your cinematic journey starts here.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-gray-400 hover:text-white transition-colors">
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20movie%20story%20explainer!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="hover:text-blue-400"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
              1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
              0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.061c0 
              2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.416-2.07 
              1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.961-.689 
              1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="hover:text-blue-600"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 
              23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 
              1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 
              0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 
              24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="hover:text-blue-500"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 
              0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.047c.476-.9 
              1.637-1.852 3.369-1.852 3.602 0 4.268 2.368 4.268 5.455v6.288zM5.337 
              7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.144.925-2.07 2.069-2.07 1.144 
              0 2.07.926 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zM6.813 
              20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 
              23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 
              .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 select-none">
        © {new Date().getFullYear()} Movie Story Explainer. All rights reserved. | Created with ❤️ by Adi
      </div>
    </footer>
  );
}
