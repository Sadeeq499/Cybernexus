import React from "react";
import MainLayout from "../layouts/MainLayout";

function Warranty() {
  return (
    <MainLayout>
      <div className="min-h-screen  py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white  rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-poppins text-primary mb-8 text-center">Warranty Terms</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Returns/Refunds:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>For the first 30 days, we offer returns, refunds, replacements, and repairs.</li>
              <li>After 30 days, we only offer replacements and repairs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Limited Warranty</h2>
            <p className="text-gray-700">
              When you buy an item from our eBay partners, it comes with a warranty for 90 days, covering parts and labor. Depending on the listing, labor may be covered for one, two, or three years. This warranty starts from the purchase date. If your item is covered under our warranty, we can choose to either repair it at our facility or provide you with credit for an exchange, up to the amount you paid for the item.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Points:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>CyberNexus LLC will only use its own parts for repairs; we do not use parts provided by customers.</li>
              <li>Warranty repairs must be done at our facility.</li>
              <li>You need to show proof of purchase for any warranty repairs.</li>
              <li>We will cover shipping costs for the first 30 days. After that, customers must pay for shipping both ways and buy our shipping box to prevent damage.</li>
              <li>All repairs are covered for 30 days starting from the day we ship the item back to you.</li>
              <li>Batteries and accessories are covered for 90 days; after that, they are considered consumable parts meant to be replaced.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All software is subject to the licensing agreement between the creator and the user. If you need to reinstall the operating system, CyberNexus LLC may charge for the labor involved. We do not offer a warranty or guarantee for software.</li>
              <li>We do not cover defects or damage caused by misuse, accidents, neglect, improper use, or unauthorized modifications.</li>
              <li>We also do not cover items disassembled or repaired in a way that affects performance or inspection.</li>
              <li>Items located outside the United States are not covered.</li>
              <li>Accidental or intentional damage, such as drops, water damage, or cracks, is not covered.</li>
              <li>Normal wear and tear is also not covered.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              We are not responsible for any incidental or consequential damages, including property damage, lost time, or lost data due to the breakdown of any item or delays in service. There are no implied warranties for specific purposes, and no express or implied warranties are provided in this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement Terms</h2>
            <p className="text-gray-700 mb-4">
              This document is the complete agreement between us. No other promises or conditions can change these terms. CyberNexus LLC reserves the right to change these warranty terms without notice and can void a warranty if the terms are violated. The time to complete warranty service is determined by CyberNexus LLC and depends on communication with the customer.
            </p>
            <p className="text-gray-700 font-semibold">
              Important Note: This warranty is only for the original buyer and cannot be transferred to someone else. It is not renewable.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Warranty;
