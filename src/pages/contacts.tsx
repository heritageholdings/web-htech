import * as React from "react"

import { Footer } from "../components/footer"
import { Header } from "../components/header"

const ContactsPage = () => (
  <div className="font-sans">
    <Header title="Get in Touch" darkBg={true} />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Contacts
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Join our team
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:careers@teamhtech.com">
                        careers@teamhtech.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Say hello
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:info@teamhtech.com">info@teamhtech.com</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Locations
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Italy
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>Piazza San Babila, 5</p>
                  <p className="mt-1">20122, Milano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default ContactsPage
