"use client";
import BackButton from "@/app/ui/Components/BackButton";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function TermsOfUse() {
  return (
    <div className="w-full h-full flex justify-center items-start flex-col pt-5 px-5 sm:px-16 py-8 gap-8">
      <BackButton />
      <div className="w-full max-w-4xl mx-auto">
        <HeaderH1 title="Terms of Use" className="mb-8" />

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on our website for personal,
              non-commercial transitory viewing only.
            </p>
            <p>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by us at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Service Description
            </h2>
            <p className="mb-4">
              We provide water restoration and related services. Our services
              include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Water damage restoration</li>
              <li>Emergency response services</li>
              <li>Insurance claim assistance</li>
              <li>Preventive maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. User Responsibilities
            </h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes via email or through our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
            </p>
            <p className="mt-2">
              Email: legal@example.com
              <br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
