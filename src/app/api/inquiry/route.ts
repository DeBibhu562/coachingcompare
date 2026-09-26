import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, exam, city, instituteName, message, pageUrl, formType } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { ok: false, error: 'Please provide your name and contact number/email.' },
        { status: 400 }
      );
    }

    // Log the inquiry to standard output for container monitoring / logs
    console.log('[INQUIRY_RECEIVED]', JSON.stringify({
      timestamp: new Date().toISOString(),
      formType: formType || 'consultation_lead',
      name,
      phone: phone || null,
      email: email || null,
      exam: exam || null,
      city: city || null,
      instituteName: instituteName || null,
      message: message || null,
      pageUrl: pageUrl || null,
    }));

    return NextResponse.json({
      ok: true,
      message: 'Inquiry received successfully. Our counsellor will contact you shortly.',
    });
  } catch (error) {
    console.error('[INQUIRY_ERROR]', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
