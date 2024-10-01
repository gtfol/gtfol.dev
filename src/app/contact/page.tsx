import dynamic from "next/dynamic";

const NoSSRContactPage = dynamic(() => import("@/components/contact-page"), {
  ssr: false,
});

export default function ContactPageWrapper() {
  return <NoSSRContactPage />;
}
