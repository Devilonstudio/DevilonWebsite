import LegalPage, { LegalSection } from "@/components/shared/LegalPage";
import { site } from "@/config/site";

const sections: LegalSection[] = [
  { heading: "About these terms", paragraphs: [`These terms apply when you use this website, run by ${site.name} ("we", "us"). By using the site you agree to them. If you do not agree, please do not use it.`] },
  {
    heading: "Our services",
    paragraphs: [
      "The website describes what we do, but it is not an offer that binds us. Any audit or project is covered by a written proposal or agreement between you and us. If it conflicts with these terms, the agreement applies for that work.",
      "Prices shown on the site, such as \"from\" prices, are starting points. We confirm the exact fee in writing before work begins.",
    ],
  },
  {
    heading: "App audits",
    items: [
      "An audit is a review of the code, configuration and areas we agree with you. It is not a guarantee that an app is free of vulnerabilities, and it is not a certification or a legal or compliance opinion.",
      "You confirm that you own the app and code you share, or have permission to share it, and that you have the right to give us access for the review.",
      "We review only systems you authorise. We do not test or attack systems without written permission.",
      "You remain responsible for decisions you make based on a report, and for keeping backups of your own systems.",
    ],
  },
  {
    heading: "Sample reports and demonstrations",
    paragraphs: ["Sample reports, sample builds and similar material on the site are illustrative. They are not client work and do not describe the results you can expect."],
  },
  {
    heading: "Confidentiality",
    paragraphs: ["We will sign your NDA or send ours before you share confidential material, if you ask. Our Privacy Policy explains how we handle personal information."],
  },
  {
    heading: "Intellectual property",
    items: [
      "The content, design and code of this website belong to us or our licensors. Please do not copy or reuse them without permission.",
      "Your code, data and materials stay yours. Ownership of deliverables we create for you is set out in our agreement with you.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: ["Please do not misuse the site. That includes trying to gain unauthorised access, interfering with how it works, scraping it in ways that overload it, or sending spam or unlawful content through the contact form."],
  },
  { heading: "Links to other sites", paragraphs: ["The site may link to third-party websites. We do not control them and are not responsible for their content or practices."] },
  {
    heading: "No warranty",
    paragraphs: ["The website and its content are provided \"as is\". We work to keep it accurate and available, but we do not promise that it will be error-free or always available."],
  },
  {
    heading: "Limits on our liability",
    paragraphs: [
      "To the extent the law allows, we are not liable for indirect or consequential loss, or for loss of profit, data or business arising from your use of the website. Our liability for services is set out in the agreement for that work.",
      "Nothing in these terms limits liability that cannot legally be limited.",
    ],
  },
  { heading: "Changes", paragraphs: ["We may change the website and these terms. The date at the top shows when they last changed. Continuing to use the site means you accept the updated terms."] },
  { heading: "Governing law", paragraphs: ["These terms are governed by the laws of the jurisdiction where our business is established. Each written agreement for services will state its own governing law and how disputes are handled."] },
];

const Terms = () => (
  <LegalPage
    badge="Legal"
    title="Terms of Service"
    intro="These terms set out the basics of using this website and how our audit and project work is handled. They are written in plain language."
    sections={sections}
    otherLink={{ to: "/privacy", label: "Privacy Policy" }}
  />
);

export default Terms;
