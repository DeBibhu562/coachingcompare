export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@coachingcompare.in";

export type InquiryPayload = {
  formType?: string;
  name: string;
  phone: string;
  email?: string;
  exam?: string;
  city?: string;
  instituteName?: string;
  message?: string;
  pageUrl?: string;
  [key: string]: unknown;
};

export async function submitInquiry(
  payload: InquiryPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const pageUrl = payload.pageUrl || (typeof window !== "undefined" ? window.location.href : "");
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, pageUrl }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: (data && data.error) || "Unable to send your inquiry. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
