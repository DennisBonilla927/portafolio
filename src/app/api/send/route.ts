import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any,res:any) {
  try {
    //const { name, phone, email, subject, message } = await req.json();
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['dennissbonilla@hotmail.com'],
      subject: body.subject,
      react: EmailTemplate({ firstName: body.name, message:body.message,phone:body.phone, email:body.email }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


