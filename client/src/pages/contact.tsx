import PageWrapper from "@/components/page-wrapper";
import ContactContainer from "@/container/contact-container";

export default function ContactSection() {
  return (
    <PageWrapper id="contact">
      <div>
        {/* Foreground Content */}
        <h2 className="text-[var(--foreground)] text-3xl font-bold mb-6 text-center">
          Contact Me
        </h2>
          <ContactContainer />
      </div>
    </PageWrapper>
  );
}
