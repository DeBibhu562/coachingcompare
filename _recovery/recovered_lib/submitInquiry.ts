// RECOVERED from compiled Next.js output — types and function bodies may be incomplete.
// Source chunk: src_lib_submitInquiry_ts_1ft10oy._.js

export const CONTACT_EMAIL = "contact@coachingcompare.in" as const;

export type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  pageUrl?: string;
};

/** Recovered stub — original POSTed to `/api/inquiry`. */
export async function submitInquiry(
  _payload: InquiryPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  throw new Error("Recovered stub — see src_lib_submitInquiry_ts chunk");
}
