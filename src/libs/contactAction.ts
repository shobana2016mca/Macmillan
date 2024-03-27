'use server';

import Contact from '@/models/Contact';
import { connectDB } from './connectDB';
import { actionResponse } from './helpers';
import { sendMail } from './nodemailer';

export async function createContact(formData: any) {
  try {
    // connect db
    await connectDB();

    // validate form data
    if (Object.keys(Object.fromEntries(formData.entries())).length <= 0) {
      return actionResponse('fail', 'Bad request', null);
    }

    // Get from data
    const { firstName, lastName, email, message } = Object.fromEntries(
      formData.entries()
    );

    // console.log(firstName, lastName, email, message);

    // create contact
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });

    // send email to admin
    const result = await sendMail(
      { subject: firstName + lastName, text: message, html: '' },
      contact.email
    );
    console.log('', result);
    // return response
    return actionResponse('success', 'Contact created', null);
  } catch (err) {
    return actionResponse('fail', 'Internal server error', null);
  }
}

interface ActionResponse {
  status: 'success' | 'fail';
  message: string;
}

interface FormData {
  entries: () => IterableIterator<[string, string]>;
}
