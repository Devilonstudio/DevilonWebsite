import LegalPage, { LegalSection } from "@/components/shared/LegalPage";
import { site } from "@/config/site";

const sections: LegalSection[] = [
  { heading: "Who we are", paragraphs: [`${site.name} ("we", "us") runs this website. If you have a question about your personal data, write to ${site.email}.`] },
  {
    heading: "What we collect",
    paragraphs: ["We collect only what we need to talk to you and do the work."],
    items: [
      "Contact form: your name, email address, company, what you need help with, timeline, a link to your app or repository if you give one, your message, whether you asked for an NDA, and the page you sent it from.",
      "Emails, calls and meeting notes when we correspond with you.",
      "Technical data: our hosting and database providers keep standard server logs (such as IP address, browser type and pages requested) for security and reliability.",
      "Business contact details of people at companies we may reach out to (see \"Outreach emails\" below).",
    ],
  },
  {
    heading: "Cookies and tracking",
    paragraphs: [
      "At the time of writing this website does not set cookies and does not use advertising trackers or analytics. If that changes, we will update this page first.",
      "The site loads its fonts from Google Fonts. When your browser requests them, Google receives your IP address and basic request details.",
      ...(site.logoBase.startsWith("http") ? ["The technology logos in the stack section are loaded from a public icon CDN (jsDelivr), which likewise receives your IP address when your browser requests them."] : []),
    ],
  },
  {
    heading: "How we use your information",
    items: [
      "To reply to you, scope work and send quotes.",
      "To sign NDAs and carry out projects and audits you ask us to do.",
      "To keep records, keep the site secure and meet our legal obligations.",
      "To improve the site and how we work.",
    ],
    paragraphs: ["Where data protection law applies, we rely on taking steps at your request, our legitimate interest in running a business, and your consent where it is required."],
  },
  {
    heading: "Code and client material",
    paragraphs: [
      "If you share code, access or documents for an audit or project, we use them only to do that work and keep them confidential. We ask for read-only access for audits and for no production data unless it is needed.",
      "We do not send your code or data to third-party AI services unless you have agreed to it. When the work ends we delete or return your material as set out in our agreement with you.",
    ],
  },
  {
    heading: "Who we share information with",
    paragraphs: ["We do not sell personal data. We share it only with service providers that help us run the business, under their own data protection terms:"],
    items: [
      "Our hosting provider, which serves this website.",
      "Supabase, which stores the messages sent through the contact form.",
      "Our email and productivity providers.",
      "Google, for fonts delivered to your browser.",
      ...(site.logoBase.startsWith("http") ? ["jsDelivr, a public CDN, for technology logos."] : []),
    ],
  },
  {
    heading: "Outreach emails",
    paragraphs: [
      "We may email people at businesses about our services using publicly available business contact details. Every message includes a way to opt out. If you ask us to stop, we stop and keep only your address on a suppression list so we do not contact you again.",
    ],
  },
  {
    heading: "International transfers",
    paragraphs: ["We and our providers may process data in several countries. Where the law requires safeguards for such transfers, we use them."],
  },
  {
    heading: "How long we keep it",
    paragraphs: ["We keep contact messages and project records only as long as we need them to respond, to deliver work, to keep proper records and to meet legal duties. You can ask us to delete your information at any time."],
  },
  {
    heading: "Security",
    paragraphs: ["We use encrypted connections, restricted access and database access rules to protect the information you send. No system is perfectly secure, so we cannot guarantee absolute security."],
  },
  {
    heading: "Your rights",
    paragraphs: ["Depending on where you live, you may have the right to access, correct, delete or export your personal data, to object to or restrict how we use it, and to withdraw consent. You may also complain to your local data protection authority. To use any of these rights, email us."],
  },
  { heading: "Children", paragraphs: ["This website is for businesses and is not aimed at children. We do not knowingly collect information from anyone under 16."] },
  { heading: "Changes to this policy", paragraphs: ["We may update this policy. The date at the top shows when it last changed."] },
];

const Privacy = () => (
  <LegalPage
    badge="Legal"
    title="Privacy Policy"
    intro="This policy explains what personal information we collect through this website and by email, why we collect it and what we do with it. We have tried to keep it short and plain."
    sections={sections}
    otherLink={{ to: "/terms", label: "Terms of Service" }}
  />
);

export default Privacy;
