import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const formName = formData.get('form-name');

    if (formName !== 'contact') {
        return NextResponse.json({ error: 'Invalid form name' }, { status: 400 });
    }

    // Here you can add any additional processing or validation
    // For now, we'll just return a success response
    return NextResponse.json({ success: true });
} 