import React from "react";
import MainLayout from "../layouts/MainLayout";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

function Warranty() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        {/* Warranty Terms */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-poppins text-primary mb-4 flex items-center">
            <FaInfoCircle className="mr-2" /> WARRANTY TERMS
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Returns/Refunds:</h3>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  For the first 30 days, we offer returns, refunds,
                  replacements, and repairs.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  After 30 days, we only offer replacements and repairs.
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">
              Our Limited Warranty
            </h3>
            <p className="text-gray-700 mb-2">
              When you buy an item from our eBay partners, it comes with a
              warranty for 90 days, covering parts and labor. Depending on the
              listing, labor may be covered for one, two, or three years. This
              warranty starts from the purchase date. If your item is covered
              under our warranty, we can choose to either repair it at our
              facility or provide you with credit for an exchange, up to the
              amount you paid for the item.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Important Points:</h3>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  CyberNexus LLC will only use its own parts for repairs; we do
                  not use parts provided by customers.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>Warranty repairs must be done at our facility.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  You need to show proof of purchase for any warranty repairs.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  We will cover shipping costs for the first 30 days. After
                  that, customers must pay for shipping both ways and buy our
                  shipping box to prevent damage.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  All repairs are covered for 30 days starting from the day we
                  ship the item back to you.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>
                  Batteries and accessories are covered for 90 days; after that,
                  they are considered consumable parts meant to be replaced.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Exclusions */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-poppins text-primary mb-4 flex items-center">
            <FaTimesCircle className="mr-2" /> EXCLUSIONS
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>
                All software is subject to the licensing agreement between the
                creator and the user. If you need to reinstall the operating
                system, CyberNexus LLC may charge for the labor involved. We do
                not offer a warranty or guarantee for software.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>
                We do not cover defects or damage caused by misuse, accidents,
                neglect, improper use, or unauthorized modifications.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>
                We also do not cover items disassembled or repaired in a way
                that affects performance or inspection.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>
                Items located outside the United States are not covered.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>
                Accidental or intentional damage, such as drops, water damage,
                or cracks, is not covered.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="text-red-500 mt-1 mr-2" />
              <span>Normal wear and tear is also not covered.</span>
            </li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-poppins text-primary mb-4 flex items-center">
            <FaInfoCircle className="mr-2" /> LIMITATION OF LIABILITY
          </h2>
          <p className="text-gray-700">
            We are not responsible for any incidental or consequential damages,
            including property damage, lost time, or lost data due to the
            breakdown of any item or delays in service. There are no implied
            warranties for specific purposes, and no express or implied
            warranties are provided in this agreement.
          </p>
        </section>

        {/* Agreement Terms */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-poppins text-primary mb-4 flex items-center">
            <FaInfoCircle className="mr-2" /> AGREEMENT TERMS
          </h2>
          <p className="text-gray-700 mb-4">
            This document is the complete agreement between us. No other
            promises or conditions can change these terms. CyberNexus LLC
            reserves the right to change these warranty terms without notice and
            can void a warranty if the terms are violated. The time to complete
            warranty service is determined by CyberNexus LLC and depends on
            communication with the customer.
          </p>
          <p className="text-gray-700">
            <strong>Important Note:</strong> This warranty is only for the
            original buyer and cannot be transferred to someone else. It is not
            renewable.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}

export default Warranty;
