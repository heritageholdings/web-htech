import * as React from "react"
import { Link } from "gatsby"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Seo from "../components/seo"

const faqs = [
  {
    question: "Our Mission",
    answer:
      "To make the global alternative investment market more accessible, efficient and connected",
  },
   {
    question: "What do we do",
    answer:
      "We help investment managers solving their hardest and most resource-heavy business challenges - whether it's about cutting costs or boosting revenues. Our cloud platform works as a single source of truth for the front, middle and back offices: we aim at giving investment managers the power to see clearly and act securely.
     ",
  },
  // More questions...
]

const AboutPage = () => (
  <>
    <Seo title="About HTECH" />
    <div className="font-sans">
      <Header title="About Us" darkBg={true} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Want to learn more?{" "}
                <Link
                  to="/contacts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Get in touch
                </Link>{" "}
                with us.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map(faq => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default AboutPage
